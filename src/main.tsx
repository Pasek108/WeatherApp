import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import type { GeoName } from "./types/location_types"
import default_location_data_pl from "./api/location_search/default_location_data_pl.json"
import default_location_data_en from "./api/location_search/default_location_data_en.json"

import type { WeatherResponse } from "./types/weather_types"
import default_weather_data_pl from "./api/weather/default_weather_data_pl.json"
import default_weather_data_en from "./api/weather/default_weather_data_en.json"

import type { LanguageData } from "./types/language_types"
import language_data_en from "./language/en.json"
import language_data_pl from "./language/pl.json"

import "./index.css"
import "./assets/icons/weather-icons.min.css"
import "./assets/icons/weather-icons-wind.min.css"

import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App {...getDefaults()} />
  </StrictMode>
)

/* ------------------------ helper functions ------------------------ */

function getDefaults() {
  const saved_language = localStorage.getItem("language")
  if (saved_language == null) localStorage.setItem("language", "en")

  const default_language = localStorage.getItem("language") || "en"
  const default_language_data = default_language === "en" ? (language_data_en as LanguageData) : (language_data_pl as LanguageData)

  const saved_location = localStorage.getItem("location")
  if (saved_location == null) localStorage.setItem("location", JSON.stringify(default_language === "en" ? default_location_data_en : default_location_data_pl))

  const default_location: GeoName = JSON.parse(localStorage.getItem("location") || "")
  const default_weather = default_language === "en" ? (default_weather_data_en as WeatherResponse) : (default_weather_data_pl as WeatherResponse)

  return { default_language, default_language_data, default_location, default_weather }
}