import { Component, computed } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  forecast = this.weather.forecast;
  error = this.weather.error;
  labels = computed(() =>
    this.forecast()?.properties.periods.map((period) => period.name)
  );
  datasets = computed(() => {
    let dataset = this.forecast()?.properties.periods.reduce(
      (prev, curr) => {
        prev[0].data.push(curr.temperature);
        prev[1].data.push(curr.relativeHumidity.value);
        prev[2].data.push(curr.probabilityOfPrecipitation.value || 0);

        return prev;
      },
      [
        {
          label: 'Temperature',
          data: [] as number[],
          fill: 'origin',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
        },
        {
          label: 'Relative Humidity',
          data: [] as number[],
          fill: 'origin',
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
        },
        {
          label: 'Rain Chance',
          data: [] as number[],
          fill: 'origin',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
        },
      ]
    );
    return dataset;
  });
  constructor(private weather: WeatherService) {}
}
