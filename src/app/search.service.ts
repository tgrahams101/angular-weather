import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) {}

  createWeatherAPICallObservable(zipCode) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode +
        ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial');
  }
}
