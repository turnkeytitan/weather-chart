export interface County {
  '@context': Context;
  id: string;
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Context {
  '@version': string;
}

export interface Geometry {
  type: string;
  coordinates?: number[][][];
  geometries?: [{ type: string; coordinates: number[][][] }];
}

export interface Properties {
  '@id': string;
  '@type': string;
  id: string;
  type: string;
  name: string;
  effectiveDate: string;
  expirationDate: string;
  state: string;
  cwa: string[];
  forecastOffices: string[];
  timeZone: string[];
  observationStations: any[];
  radarStation: any;
}
