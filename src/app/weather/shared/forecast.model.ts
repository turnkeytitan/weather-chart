export interface Forecast {
  id: string;
  type: 'Feature';
  properties: {
    geometry: string;
    units: 'us' | 'si';
    forecastGenerator: string;
    generatedAt: string;
    updateTime: string;
    elevation: {
      value: number;
      maxValue: number;
      minValue: number;
      unitCode: string;
      qualityControl:
        | 'Z'
        | ' C'
        | ' S'
        | ' V'
        | ' X'
        | ' Q'
        | ' G'
        | ' B'
        | ' T';
    };
    periods: [
      {
        number: number;
        name: 'Tuesday Night';
        startTime: string;
        endTime: string;
        isDaytime: true;
        temperatureTrend: 'rising' | 'falling';
        probabilityOfPrecipitation: {
          value: number;
          maxValue: number;
          minValue: number;
          unitCode: string;
          qualityControl:
            | 'Z'
            | ' C'
            | ' S'
            | ' V'
            | ' X'
            | ' Q'
            | ' G'
            | ' B'
            | ' T';
        };
        dewpoint: {
          value: number;
          maxValue: number;
          minValue: number;
          unitCode: string;
          qualityControl:
            | 'Z'
            | ' C'
            | ' S'
            | ' V'
            | ' X'
            | ' Q'
            | ' G'
            | ' B'
            | ' T';
        };
        relativeHumidity: {
          value: number;
          maxValue: number;
          minValue: number;
          unitCode: string;
          qualityControl:
            | 'Z'
            | ' C'
            | ' S'
            | ' V'
            | ' X'
            | ' Q'
            | ' G'
            | ' B'
            | ' T';
        };
        windDirection:
          | 'N'
          | 'NNE'
          | 'NE'
          | 'ENE'
          | 'E'
          | 'ESE'
          | 'SE'
          | 'SSE'
          | 'S'
          | 'SSW'
          | 'SW'
          | 'WSW'
          | 'W'
          | 'WNW'
          | 'NW'
          | 'NNW';
        shortForecast: string;
        detailedForecast: string;
      }
    ];
  };
}
