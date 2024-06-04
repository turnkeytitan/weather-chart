export interface Office {
  '@type': 'GovernmentOrganization';
  '@id': string;
  id: string;
  name: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  telephone: string;
  faxNumber: string;
  email: string;
  sameAs: string;
  nwsRegion: string;
  parentOrganization: string;
  responsibleCounties: [string];
  responsibleForecastZones: [string];
  responsibleFireZones: [string];
  approvedObservationStations: [string];
}
