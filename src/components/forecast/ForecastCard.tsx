import type { LanguageData } from "../../types/language_types"

import DayName from "../shared/DayName"
import Temperature from "../shared/Temperature"

type ForecastProps = {
  lang: LanguageData
  date: number
  temperature: number
  feels_like: number
  icon: string,
  onClick: () => void
}

export default function ForecastCard(props: ForecastProps) {
  return (
    <a href="#top" className="forecast-card blur" onClick={props.onClick}>
      <DayName date={props.date} lang={props.lang} now={false} />

      <div className="icon">
        <i className={`wi wi-forecast-io-${props.icon}`}></i>
      </div>

      <div className="temperature-container">
        <Temperature lang={null} temperature={props.temperature} feels_like={props.feels_like} />
      </div>
    </a>
  )
}
