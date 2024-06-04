import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfficeComponent } from './weather/office/office.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OfficeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wisy';
}
