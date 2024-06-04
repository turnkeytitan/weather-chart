import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Point } from './point.model';
import { take } from 'rxjs';
import { Office } from './office.model';
import { County } from './county.model';
import { Forecast } from './forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = environment.WEATHER_API;
  forecast: WritableSignal<Forecast | null> = signal(null);
  error = signal('');
  constructor(private http: HttpClient) {}

  getOffice(office: string) {
    return this.http.get<Office>(`${this.url}/offices/${office}`).pipe(take(1));
  }
  getPoint(lat: number, lon: number) {
    return this.http
      .get<Point>(`${this.url}/points/${lat.toFixed(4)},${lon.toFixed(4)}`)
      .pipe(take(1));
  }
  getCounty(county: string) {
    return this.http
      .get<County>(`${this.url}/zones/county/${county}`)
      .pipe(take(1));
  }
  getForecast(wfo: string, coordinates: string) {
    return this.http
      .get<Forecast>(`${this.url}/gridpoints/${wfo}/${coordinates}/forecast`)
      .pipe(take(1));
  }
}
