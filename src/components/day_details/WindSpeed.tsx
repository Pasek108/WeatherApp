import type { LanguageData } from "../../types/language_types"

type WindSpeedProps = {
  wind_speed: number
  wind_deg: number
  lang: LanguageData
}

export default function WindSpeed(props: WindSpeedProps) {
  return (
    <>
      <div className="wind">
        {props.lang.words.wind_speed}
        {props.wind_speed} km/h <i className={`wi wi-wind from-${props.wind_deg}-deg`}></i>
      </div>
      <div className="beaufort">
        {props.lang.words.beaufort_scale}
        <i className={`wi wi-wind-beaufort-${beaufort_scale(props.wind_speed)}`}></i>
      </div>
    </>
  )
}

function beaufort_scale(wind_spped: number) {
  if (wind_spped < 2) return 0
  if (wind_spped < 5) return 1
  if (wind_spped < 11) return 2
  if (wind_spped < 19) return 3
  if (wind_spped < 28) return 4
  if (wind_spped < 38) return 5
  if (wind_spped < 49) return 6
  if (wind_spped < 61) return 7
  if (wind_spped < 74) return 8
  if (wind_spped < 88) return 9
  if (wind_spped < 102) return 10
  if (wind_spped < 117) return 11

  return 12
}
