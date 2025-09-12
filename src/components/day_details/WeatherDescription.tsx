import type { LanguageData } from "../../types/language_types"

type WeatherDescriptionProps = {
  lang: LanguageData
  weather_data: WeatherDataForSummary
}

interface WeatherDataForSummary {
  icon: string
  precipType: string
  precipIntensity: number
  precipProbability: number
  windSpeed: number
  cloudCover: number
  isDaytime?: boolean
}

export default function WeatherDescription(props: WeatherDescriptionProps) {
  const weather_description = getShortSummary(props.weather_data, props.lang)

  return (
    <div>
      <div className="icon">
        <i className={`wi wi-forecast-io-${props.weather_data.icon}`}></i>
      </div>

      <div className="weather-description">{weather_description}</div>
    </div>
  )
}

/* ------------------------ helper functions ------------------------ */

function getShortSummary(data: WeatherDataForSummary, lang: LanguageData): string {
  const summary_text = getSummaryString(data, lang)
  const precipitation_probability = data.precipProbability ? Math.round(data.precipProbability * 100) : 0

  return withProbability(summary_text, precipitation_probability)
}

function getSummaryString(data: WeatherDataForSummary, lang: LanguageData) {
  const precipitation_type = data.precipType || data.icon

  if (data.icon === "fog") return lang.summary.fog
  if (data.icon === "sleet") return lang.summary.sleet
  if (data.icon === "hail") return lang.summary.hail
  if (data.icon === "mixed") return lang.summary.mixed_precipitation

  if (data.icon === "wind") {
    const speed = data.windSpeed || 0
    if (speed < 10) return lang.summary.breezy
    if (speed < 30) return lang.summary.windy
    return lang.summary.strong_wind
  }

  if (data.icon === "cloudy" || data.icon?.includes("partly-cloudy")) {
    const cover = data.cloudCover || 0
    if (cover < 0.3) return lang.summary.partly_cloudy
    if (cover < 0.7) return lang.summary.mostly_cloudy
    return lang.summary.overcast
  }

  if (data.icon === "clear-day" || data.icon === "clear-night") {
    const isDay = data.isDaytime ?? data.icon === "clear-day"
    return isDay ? lang.summary.clear_day : lang.summary.clear_night
  }

  if (data.icon === "rain" && precipitation_type === "rain") {
    const intensity = data.precipIntensity || 0
    if (intensity < 0.1) return lang.summary.light_rain
    if (intensity < 2.0) return lang.summary.moderate_rain
    return lang.summary.heavy_rain
  }

  if (data.icon === "snow" && precipitation_type === "snow") {
    const intensity = data.precipIntensity || 0
    if (intensity < 0.1) return lang.summary.light_snow
    if (intensity < 1.0) return lang.summary.moderate_snow
    return lang.summary.heavy_snow
  }

  return lang.summary.unknown
}

function withProbability(summary: string, prob: number = 0) {
  if (prob > 0) return `${summary} (${prob}%)`
  return summary
}
