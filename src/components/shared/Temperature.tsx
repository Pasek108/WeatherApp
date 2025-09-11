import type { LanguageData } from "../../types/language_types"

type TemperatureProps = {
  temperature: number
  feels_like: number
  lang: LanguageData | null
}

export default function Temperature(props: TemperatureProps) {
  return (
    <>
      <div className="temperature">
        <i className="wi wi-thermometer"></i> {props.temperature?.toFixed(2)} &deg;C
      </div>
      <div className="feels-like">
        {props.lang?.words.feels_like} {props.feels_like?.toFixed(2)} &deg;C
      </div>
    </>
  )
}
