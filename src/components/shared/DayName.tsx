import type { LanguageData } from "../../types/language_types"

type DayNameProps = {
  date: number
  lang: LanguageData
  now: boolean
}

export default function DayName(props: DayNameProps) {
  const lang_words = props.lang.words
  const date = new Date(props.date * 1000)
  const day_name = props.now ? lang_words.now : lang_words.day_names[date.getDay()]

  return (
    <div className="day-name">
      <div>{day_name}</div>
      <div>{date.toLocaleDateString("en-GB")}</div>
    </div>
  )
}
