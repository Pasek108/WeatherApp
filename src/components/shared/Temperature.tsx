import type { LanguageData } from "../../types/language_types"

type TemperatureProps = {
  temperature: number
  feels_like: number
  lang: LanguageData | null
}

export default function Temperature(props: TemperatureProps) {
  const colon = props.lang == null ? "" : ": "

  const temperature_translation = props.lang?.weather.temperature || ""
  const temperature = props.temperature.toFixed(2)

  const feels_like_translation = props.lang?.weather.feels_like || ""
  const feels_like = props.feels_like.toFixed(2)

  return (
    <>
      <div className="temperature">
        <i className="wi wi-thermometer"></i>
        {temperature_translation}{colon} {temperature} &deg;C
      </div>

      <div className="feels-like">
        {feels_like_translation}{colon} {feels_like} &deg;C
      </div>
    </>
  )
}
