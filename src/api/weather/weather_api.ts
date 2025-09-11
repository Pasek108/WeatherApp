import type { GeoName } from "../../types/location_types"
import type { WeatherResponse } from "../../types/weather_types"

import getWeatherApiKey from "./weather_api_key"

export default async function getWeather(location: GeoName, language: string): Promise<WeatherResponse> {
  const API_KEY = getWeatherApiKey()

  const latitude = location.lat
  const longitude = location.lng

  let url = new URL(`https://api.pirateweather.net/forecast/${API_KEY}/${latitude},${longitude}`)
  url.searchParams.append("lang", language)
  url.searchParams.append("units", "ca")
  url.searchParams.append("exclude", "minutely,alerts,hourly,flags,summary")

  const api_call = await fetch(url)
  const weather_data = await api_call.json()

  return weather_data
}
