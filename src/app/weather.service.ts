import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '9af28a76407d010bfbf58d15dc20b81d';
  url;
  url2;
  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    this.url2 = 'http://api.openweathermap.org/data/2.5/forecast/hourly?q=';
  }
  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey);
  }
  otherForecast(city: string) {
    return this.http.get(this.url2 + city + '&APPID=' + this.apiKey);
  }
}
