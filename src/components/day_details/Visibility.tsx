import type { LanguageData } from "../../types/language_types"

type CloudsProps = {
  visibility: number
  lang: LanguageData
}

export default function Visibility(props: CloudsProps) {
  const visibility = `${props.visibility}m`

  return (
    <div className="visibility">
      {props.lang.words.visibility}
      {props.visibility != null ? visibility : <i className="wi wi-na"></i>}
    </div>
  )
}
