import { W } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatCardModule,
    MatIconModule,
    MatCardModule,
    MatInput,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) {}

  search(city: string) {
    this.weatherService.getWeather(city).subscribe((weather) => {
      console.log(weather.current);

      this.weather = weather;
    });
  }
}
