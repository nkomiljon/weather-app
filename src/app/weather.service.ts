import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  part = 'current';
  lat = 40.295211604699354;
  lon = 69.60703893856277;
  private apiKey = '1b7ca511b73c4ed788462138242810';
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.weatherapi.com/v1/current.json?q=${city}&key=${this.apiKey}`
    );
  }
}
