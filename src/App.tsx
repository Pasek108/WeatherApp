import { useEffect, useState } from "react"

import "./App.css"

import type { GeoName } from "./types/location_types"
import type { CurrentWeather, DailyWeather, WeatherResponse } from "./types/weather_types"
import type { LanguageData } from "./types/language_types"

import default_location_data_pl from "./api/location_search/default_location_data_pl.json"
import default_location_data_en from "./api/location_search/default_location_data_en.json"

import default_weather_data_pl from "./api/weather/default_weather_data_pl.json"
import default_weather_data_en from "./api/weather/default_weather_data_en.json"

import language_data_en from "./language/en.json"
import language_data_pl from "./language/pl.json"

import getWeather from "./api/weather/weather_api"

import Clock from "./components/clock/Clock"
import LanguageSelect from "./components/langauge_select/LanguageSelect"
import DayDetails from "./components/day_details/DayDetails"
import Forecast from "./components/forecast/Forecast"
import LocationSearch from "./components/location_search/LocationSearch"

function getDefaults() {
  const saved_language = localStorage.getItem("language")
  if (saved_language == null) localStorage.setItem("language", "en")

  const loaded_language = localStorage.getItem("language") || "en"
  const loaded_language_data = loaded_language === "en" ? (language_data_en as LanguageData) : (language_data_pl as LanguageData)

  const saved_location = localStorage.getItem("location")
  if (saved_location == null) localStorage.setItem("location", JSON.stringify(loaded_language === "en" ? default_location_data_en : default_location_data_pl))

  const loaded_location: GeoName = JSON.parse(localStorage.getItem("location") || "")
  const loaded_weather = loaded_language === "en" ? (default_weather_data_en as WeatherResponse) : (default_weather_data_pl as WeatherResponse)

  return { loaded_language, loaded_language_data, loaded_location, loaded_weather }
}

const defaults = getDefaults()

export default function App() {
  const [selected_language, setSelectedLanguage] = useState<string>(defaults.loaded_language)
  const [language_data, setLanguageData] = useState<LanguageData>(defaults.loaded_language_data)

  const [location, setLocation] = useState<GeoName>(defaults.loaded_location)
  const [weather_data, setWeatherData] = useState<WeatherResponse>(defaults.loaded_weather)
  const [current_day, setCurrentDay] = useState<DailyWeather | CurrentWeather>(defaults.loaded_weather.currently as CurrentWeather)

  useEffect(() => {
    localStorage.setItem("language", selected_language)
    setLanguageData(selected_language === "pl" ? language_data_pl : language_data_en)
  }, [selected_language])

  useEffect(() => {
    const loadWeather = async () => {
      const weather = await getWeather(location, selected_language)
      setWeatherData(weather)
      setCurrentDay(weather.currently)
    }

    if (location) {
      localStorage.setItem("location", JSON.stringify(location))
      loadWeather()
    }
  }, [location])

  const [sunrise, sunset] = getSunriseSunset(weather_data, current_day)

  return (
    <main>
      <header>
        <LocationSearch lang={language_data} location={location} loadWeatherForLocation={(location) => setLocation(location)} />
        <LanguageSelect lang={selected_language} changeLanguage={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedLanguage(e.target.value)} />
      </header>

      <div className="main-content">
        <DayDetails lang={language_data} current={current_day} />
        <Clock lang={language_data} sunrise={sunrise} sunset={sunset} showCurrentWeather={() => setCurrentDay(weather_data.currently)} />
      </div>

      <Forecast lang={language_data} daily={weather_data.daily} showWeatherForDay={(day: DailyWeather) => setCurrentDay(day)} />
    </main>
  )
}

function getSunriseSunset(weather_data: WeatherResponse, current_day: DailyWeather | CurrentWeather) {
  let sunrise = 0
  let sunset = 0

  if ("sunriseTime" in current_day) {
    sunrise = current_day.sunriseTime
    sunset = current_day.sunsetTime
  } else {
    sunrise = weather_data?.daily?.data[0]?.sunriseTime
    sunset = weather_data?.daily?.data[0]?.sunsetTime
  }

  return [sunrise, sunset]
}
