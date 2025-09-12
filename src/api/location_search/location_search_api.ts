import type { GeoName } from "../../types/location_types"

export default async function getLocations(search_value: string, language: string): Promise<GeoName[]> {
  const rows_limit = "20"

  let url = new URL("https://secure.geonames.org/searchJSON")
  url.searchParams.append("q", search_value)
  url.searchParams.append("lang", language)
  url.searchParams.append("maxRows", rows_limit)
  url.searchParams.append("username", "zboczonyartur")

  const api_call = await fetch(url)
  const response = await api_call.json()

  return response.geonames
}
