import "./forecast.css"

import type { LanguageData } from "../../types/language_types"
import type { DailyForecast, DailyWeather } from "../../types/weather_types"

import ForecastCard from "./ForecastCard"

type ForecastProps = {
  lang: LanguageData
  daily: DailyForecast
  showWeatherForDay: (day: DailyWeather) => void
}

export default function Forecast(props: ForecastProps) {
  let days = []

  for (let i = 0; i < props?.daily?.data?.length; i++) {
    const day_data = props.daily.data[i]
    const date = day_data.time
    const icon = day_data.icon
    const temperature = (day_data.temperatureHigh + day_data.temperatureLow) / 2
    const feels_like = (day_data.apparentTemperatureHigh + day_data.apparentTemperatureLow) / 2

    days.push(<ForecastCard key={JSON.stringify(day_data)} lang={props.lang} date={date} icon={icon} temperature={temperature} feels_like={feels_like} onClick={() => props.showWeatherForDay(day_data)} />)
  }

  return <div className="forecast">{days}</div>
}
