import type { LanguageData } from "../../types/language_types"

type DayNameProps = {
  date: number
  lang: LanguageData
  now: boolean
}

export default function DayName(props: DayNameProps) {
  const date = new Date(props.date * 1000)
  const day_name = props.now ? props.lang.time.now : props.lang.time.day_names[date.getDay()]
  const date_string = date.toLocaleDateString("en-GB")

  return (
    <div className="day-name">
      <div>{day_name}</div>
      <div>{date_string}</div>
    </div>
  )
}
