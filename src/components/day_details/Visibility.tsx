import type { LanguageData } from "../../types/language_types"

type CloudsProps = {
  visibility: number
  lang: LanguageData
}

export default function Visibility(props: CloudsProps) {
  return (
    <div className="visibility">
      {props.lang.weather.visibility}: {props.visibility}m
    </div>
  )
}
