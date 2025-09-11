type WeatherDescriptionProps = {
  icon_id: string
  weather_description: string
}

export default function WeatherDescription(props: WeatherDescriptionProps) {
  let weather = props.weather_description

  return (
    <div>
      <div className="icon">
        <i className={`wi wi-forecast-io-${props.icon_id}`}></i>
      </div>

      <div className="weather-description">{weather}</div>
    </div>
  )
}
