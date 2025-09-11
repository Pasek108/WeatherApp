import { useEffect, useRef, useState } from "react"

import "./location_search.css"

import type { LanguageData } from "../../types/language_types"
import type { GeoName } from "../../types/location_types"

import getLocations from "../../api/location_search/location_search_api"

type LocationSearchProps = {
  lang: LanguageData
  location: GeoName
  loadWeatherForLocation: (location: GeoName) => void
}

export default function LocationSearch(props: LocationSearchProps) {
  const [locations, setLocations] = useState<React.JSX.Element[]>([])
  const [locationStr, setLocationStr] = useState("")
  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setLocationStr(`${props.location.toponymName}, ${props.location.adminName1}, ${props.location.countryName}`)
  }, [props.location])

  useEffect(() => {
    function handleClickOutside(evt: MouseEvent) {
      if (searchInput.current && !searchInput.current.contains(evt.target as Node)) {
        setLocations([])
        setLocationStr(`${props.location.toponymName}, ${props.location.adminName1}, ${props.location.countryName}`)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [props.location])

  async function showLocations(searchValue: string) {
    setLocationStr(searchValue)

    if (searchValue.length < 3) {
      setLocations([])
      return
    }

    const foundLocations = await getLocations(searchValue, localStorage.getItem("language") || "en")

    const possibleLocations = foundLocations.map((location) => (
      <div
        key={JSON.stringify(location)}
        className="location"
        onClick={() => {
          props.loadWeatherForLocation(location)
          setLocations([])
        }}
      >
        {location.toponymName},&nbsp;
        {location.adminName1},&nbsp;
        {location.countryName}
      </div>
    ))

    setLocations(possibleLocations)
  }

  return (
    <div className="location-search">
      <input ref={searchInput} className="search blur" id="location-search" type="text" onClick={() => setLocationStr("")} value={locationStr} onChange={(evt) => showLocations(evt.target.value)} placeholder={props.lang.words.change_localisation} />
      <div className={`locations ${locations.length ? "active" : ""}`}>{locations}</div>
    </div>
  )
}
