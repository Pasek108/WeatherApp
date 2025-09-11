import "./language_select.css"

type LanguageSelectProps = {
  lang: string
  changeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function LanguageSelect(props: LanguageSelectProps) {
  return (
    <select className="language-select blur" id="language-select" defaultValue={props.lang} onChange={props.changeLanguage}>
      <option value="pl">PL</option>
      <option value="en">EN</option>
    </select>
  )
}
