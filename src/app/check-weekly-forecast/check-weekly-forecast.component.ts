import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-check-weekly-forecast',
  templateUrl: './check-weekly-forecast.component.html',
  styleUrls: ['./check-weekly-forecast.component.css']
})
export class CheckWeeklyForecastComponent implements OnInit {


  constructor(private weatherSer: WeatherService) {
  }

  forecastForm: FormGroup;
  forecast: Forecast[] = [];

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    });
  }
  onSubmit() {
    this.forecast.splice(0, this.forecast.length);
    this.weatherSer.otherForecast(this.forecastForm.value.forecastCity).subscribe(
      (data) => {
        console.log(data);
        // ** error TS2339: Property 'list' does not exist on type 'Object'.
      // **  for (let i = 0; i < data.list.length; i = i + 5){
        //  const forecastWeather = new Forecast(data.city.name,
        //  data.list[i].weather[0].description,
        //  data.list[i].main.temp,
        // data.list[i].dt_txt,
          //  data.list[i].weather[0].icon);
          // console.log(forecastWeather);
         // this.forecast.push(forecastWeather);//}
        console.log(this.forecast);
     return this.forecast;
      }
    );
  }
}

