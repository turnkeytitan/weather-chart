export interface properties {
  geometry: string;
  '@id': string;
  '@type': string;
  cwa: string;
  forecastOffice: string;
  gridId: string;
  gridX: number;
  gridY: number;
  forecast: string;
  forecastHourly: string;
  forecastGridData: string;
  observationStations: string;
  forecastZone: string;
  county: string;
  fireWeatherZone: string;
  timeZone: string;
  radarStation: string;
}

export interface Point {
  id: string;
  type: string;
  properties: properties;
}

