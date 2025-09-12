export type Language = "en" | "pl"

export type LanguageData = {
  time: {
    now: string
    actual_time: string
    day_names: string[]
  }

  weather: {
    temperature: string
    feels_like: string
    humidity: string
    pressure: string
    clouds: string
    visibility: string
    wind_speed: string
    beaufort_scale: string
    sunrise: string
    sunset: string
  }

  summary: {
    light_rain: string
    moderate_rain: string
    heavy_rain: string
    light_snow: string
    moderate_snow: string
    heavy_snow: string
    sleet: string
    hail: string
    mixed_precipitation: string
    fog: string
    breezy: string
    windy: string
    strong_wind: string
    partly_cloudy: string
    mostly_cloudy: string
    overcast: string
    clear_day: string
    clear_night: string
    unknown: string
  }

  commands: {
    change_localisation: string
    show_actual_weather: string
  }
}
