import "./day_details.css"

import type { LanguageData } from "../../types/language_types"
import type { CurrentWeather, DailyWeather } from "../../types/weather_types"

import DayName from "../shared/DayName"
import Temperature from "../shared/Temperature"

import Clouds from "./Clouds"
import Humidity from "./Humidity"
import Pressure from "./Pressure"
import Visibility from "./Visibility"
import WeatherDescription from "./WeatherDescription"
import WindSpeed from "./WindSpeed"

type DayDetailsProps = {
  lang: LanguageData
  current: DailyWeather | CurrentWeather
}

export default function DayDetails(props: DayDetailsProps) {
  if (props.current == null) return <div className="weather">Loading...</div>

  const is_showing_current_weather = "temperature" in props.current
  const [temperature, feels_like] = getTemperature(props.current)
  const clouds_cover_percent = +(props.current.cloudCover * 100).toFixed(2)

  return (
    <div className="weather">
      <div className="day-weather">
        <DayName date={props.current.time} now={is_showing_current_weather} lang={props.lang} />
        <WeatherDescription weather_data={props.current} lang={props.lang} />
      </div>

      <div className="row weather-details">
        <div className="col">
          <Temperature temperature={temperature} feels_like={feels_like} lang={props.lang} />
          <Humidity humidity={props.current.humidity} lang={props.lang} />
          <Pressure pressure={props.current.pressure} lang={props.lang} />
        </div>
        <div className="col">
          <Clouds clouds={clouds_cover_percent} lang={props.lang} />
          <Visibility visibility={props.current.visibility} lang={props.lang} />
          <WindSpeed wind_speed={props.current.windSpeed} wind_deg={props.current.windBearing} lang={props.lang} />
        </div>
      </div>
    </div>
  )
}

/* ------------------------ helper functions ------------------------ */

function getTemperature(weather_data: DailyWeather | CurrentWeather) {
  let temperature = Infinity
  let feels_like = Infinity

  if ("temperature" in weather_data) {
    temperature = weather_data.temperature
    feels_like = weather_data.apparentTemperature
  } else {
    temperature = (weather_data.temperatureHigh + weather_data.temperatureLow) / 2
    feels_like = (weather_data.apparentTemperatureHigh + weather_data.apparentTemperatureLow) / 2
  }

  return [temperature, feels_like]
}
