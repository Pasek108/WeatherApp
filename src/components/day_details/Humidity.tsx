import type { LanguageData } from "../../types/language_types"

type HumidityProps = {
  humidity: number
  lang: LanguageData
}

export default function Humidity(props: HumidityProps) {
  return (
    <div className="humidity">
      <i className="wi wi-humidity"></i> 
      {props.lang.weather.humidity}: {props.humidity}%
    </div>
  )
}
