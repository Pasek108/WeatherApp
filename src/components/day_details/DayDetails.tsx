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

  const wind_speed = props.current.windSpeed
  let temperature = Infinity
  let feels_like = Infinity

  if ("temperature" in props.current) {
    temperature = props.current.temperature
    feels_like = props.current.apparentTemperature
  } else {
    temperature = (props.current.temperatureHigh + props.current.temperatureLow) / 2
    feels_like = (props.current.apparentTemperatureHigh + props.current.apparentTemperatureLow) / 2
  }

  return (
    <div className="weather">
      <div className="day-weather">
        <DayName date={props.current.time} lang={props.lang} now={"temperature" in props.current} />
        <WeatherDescription weather_description={props.current.summary} icon_id={props.current.icon} />
      </div>

      <div className="row weather-details">
        <div className="col">
          <Temperature temperature={temperature} feels_like={feels_like} lang={props.lang} />
          <Humidity humidity={props.current.humidity} lang={props.lang} />
          <Pressure pressure={props.current.pressure} lang={props.lang} />
        </div>
        <div className="col">
          <Clouds clouds={props.current.cloudCover * 100} lang={props.lang} />
          <Visibility visibility={props.current.visibility} lang={props.lang} />
          <WindSpeed wind_speed={wind_speed} wind_deg={props.current.windBearing} lang={props.lang} />
        </div>
      </div>
    </div>
  )
}
