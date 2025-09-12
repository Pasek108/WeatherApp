import type { LanguageData } from "../../types/language_types"

type PressureProps = {
  pressure: number
  lang: LanguageData
}

export default function Pressure(props: PressureProps) {
  return (
    <div className="pressure">
      <i className="wi wi-barometer"></i> 
      {props.lang.weather.pressure}: {props.pressure} hPa
    </div>
  )
}
