import { Component } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Point } from '../shared/point.model';
import { catchError, concatMap, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [],
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss',
})
export class OfficeComponent {
  offices = [
    { id: 'LWX', name: 'District of Columbia Forecast' },
    { id: 'TOP', name: 'Kansas Forecast' },
  ];
  point: Point | null = null;
  constructor(private weather: WeatherService, private router: Router) {}
  selectOffice(id: string) {
    this.weather
      .getOffice(id)
      .pipe(
        concatMap((res) => {
          const counties = res.responsibleCounties;
          const random = Math.floor(Math.random() * counties.length);
          const randomCounty = counties[random].split('/');

          return this.weather.getCounty(randomCounty[randomCounty.length - 1]);
        }),
        concatMap((res) => {
          let coordinates;
          if (res.geometry.coordinates) {
            coordinates = res.geometry.coordinates.flat(5);
          } else {
            coordinates = res.geometry.geometries![0].coordinates.flat(5);
          }
          let random = Math.floor(Math.random() * coordinates.length);
          if (random % 2 !== 0) random--;
          const lat = coordinates[random + 1];
          const lon = coordinates[random];
          return this.weather.getPoint(lat, lon);
        }),
        concatMap((res) => {
          const gridId = res.properties.gridId;
          const coor = `${res.properties.gridX},${res.properties.gridY}`;
          return this.weather.getForecast(gridId, coor);
        }),
        catchError(() => {
          return of('An error ocurred with some crazy coordinates. Try again!');
        })
      )
      .subscribe((res) => {
        if (typeof res !== 'string') {
          this.weather.forecast.set(res);
          this.weather.error.set('');
        } else {
          this.weather.error.set(res);
          this.weather.forecast.set(null);
        }
        this.router.navigate(['/view']);
      });
  }
}
