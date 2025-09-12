import { useState, useEffect } from "react"

import "./clock.css"

import type { LanguageData } from "../../types/language_types"

type ClockProps = {
  lang: LanguageData
  sunrise: number
  sunset: number
  showCurrentWeather: () => void
}

export default function Clock(props: ClockProps) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let interval = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const sunrise_time = new Date(props.sunrise * 1000).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false })
  const sunset_time = new Date(props.sunset * 1000).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false })

  return (
    <div className="clock">
      <h4>{props.lang.time.actual_time}:</h4>

      <div className="time">{date.toLocaleTimeString("en-GB")}</div>
      <div className="date">{date.toLocaleDateString("en-GB")}</div>

      <div className="sunrise-sunset">
        <div title={props.lang.weather.sunrise}>
          <i className="wi wi-sunrise"></i> {sunrise_time}
        </div>

        <div title={props.lang.weather.sunset}>
          <i className="wi wi-sunset"></i> {sunset_time}
        </div>
      </div>

      <div className="show-current-weather" onClick={props.showCurrentWeather}>
        {props.lang.commands.show_actual_weather}
      </div>
    </div>
  )
}
