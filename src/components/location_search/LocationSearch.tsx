import { useEffect, useRef, useState, type JSX } from "react"

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
  const [locations_list, setLocationsList] = useState<React.JSX.Element[]>([])
  const [searched_location, setSearchedLocation] = useState("")
  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchedLocation(getLocationString(props.location))
  }, [props.location])

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  function handleClickOutside(evt: MouseEvent) {
    if (searchInput.current && !searchInput.current.contains(evt.target as Node)) {
      setSearchedLocation(getLocationString(props.location))
      setLocationsList([])
    }
  }

  async function showPossibleLocations(searchValue: string) {
    setSearchedLocation(searchValue)

    if (searchValue.length < 3) return setLocationsList([])

    const foundLocations = await getLocations(searchValue, localStorage.getItem("language") || "en")
    const possibleLocations = convertLocationsToOptions(foundLocations, props.loadWeatherForLocation, setLocationsList)
    setLocationsList(possibleLocations)
  }

  return (
    <div className="location-search">
      <input ref={searchInput} className="search blur" id="location-search" type="text" onClick={() => setSearchedLocation("")} value={searched_location} onChange={(evt) => showPossibleLocations(evt.target.value)} placeholder={props.lang.commands.change_localisation} />
      <div className={`locations ${locations_list.length ? "active" : ""}`}>{locations_list}</div>
    </div>
  )
}

/* ------------------------ helper functions ------------------------ */

function getLocationString(location: GeoName): string {
  return `${location.toponymName}, ${location.adminName1}, ${location.countryName}`
}

function convertLocationsToOptions(locations: GeoName[], loadWeatherCallback: (location: GeoName) => void, setLocationsListCallback: (value: React.SetStateAction<JSX.Element[]>) => void): JSX.Element[] {
  return locations.map((location) => {
    const optionClickCallback = () => {
      loadWeatherCallback(location)
      setLocationsListCallback([])
    }

    return (
      <div key={JSON.stringify(location)} className="location" onClick={optionClickCallback}>
        {location.toponymName},&nbsp;
        {location.adminName1},&nbsp;
        {location.countryName}
      </div>
    )
  })
}
