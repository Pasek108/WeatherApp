import type { LanguageData } from "../../types/language_types"

type CloudsProps = {
  clouds: number
  lang: LanguageData
}

export default function Clouds(props: CloudsProps) {
  return (
    <div className="clouds">
      {props.lang.words.clouds}
      {props.clouds.toFixed(2)}%
    </div>
  )
}
