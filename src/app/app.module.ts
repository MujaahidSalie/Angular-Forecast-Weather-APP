import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchForACityComponent } from './search-for-a-city/search-for-a-city.component';
import { CheckWeeklyForecastComponent } from './check-weekly-forecast/check-weekly-forecast.component';
import {WeatherService} from './weather.service';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'check-weekly-forecast', component: CheckWeeklyForecastComponent
  },
  {
    path: 'search-for-a-city', component: SearchForACityComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchForACityComponent,
    CheckWeeklyForecastComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
