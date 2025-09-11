export type WeatherResponse = {
  latitude: number
  longitude: number
  timezone: string
  offset: number
  elevation: number
  currently: CurrentWeather
  daily: DailyForecast
  flags: Flags
}

export type CurrentWeather = {
  time: number
  summary: string
  icon: string
  nearestStormDistance: number
  nearestStormBearing: number
  precipIntensity: number
  precipProbability: number
  precipIntensityError: number
  precipType: string
  temperature: number
  apparentTemperature: number
  dewPoint: number
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  visibility: number
  ozone: number
}

export type DailyForecast = {
  summary: string
  icon: string
  data: DailyWeather[]
}

export type DailyWeather = {
  time: number
  summary: string
  icon: string
  sunriseTime: number
  sunsetTime: number
  moonPhase: number
  precipIntensity: number
  precipIntensityMax: number
  precipIntensityMaxTime: number
  precipProbability: number
  precipAccumulation: number
  precipType: string
  temperatureHigh: number
  temperatureHighTime: number
  temperatureLow: number
  temperatureLowTime: number
  apparentTemperatureHigh: number
  apparentTemperatureHighTime: number
  apparentTemperatureLow: number
  apparentTemperatureLowTime: number
  dewPoint: number
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windGustTime: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  uvIndexTime: number
  visibility: number
  temperatureMin: number
  temperatureMinTime: number
  temperatureMax: number
  temperatureMaxTime: number
  apparentTemperatureMin: number
  apparentTemperatureMinTime: number
  apparentTemperatureMax: number
  apparentTemperatureMaxTime: number
}

export type Flags = {
  sources: string[]
  sourceTimes: SourceTimes
  "nearest-station": number
  units: string
  version: string
}

export type SourceTimes = {
  gfs: string
  gefs: string
}
