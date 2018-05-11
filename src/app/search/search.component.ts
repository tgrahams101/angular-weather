import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  zip: any;
  weatherObject: any;
  searchSubject = new Subject();
  constructor( private http: Http, private searchService: SearchService) { }

  ngOnInit() {
    // this.searchSubject
    // .pipe(debounceTime(1000))
    // .pipe(distinctUntilChanged())
    // .subscribe( zip => {
      //   this.http.get
      // })
      this.zip = '94107';
      this.searchSubject.pipe(debounceTime(1000), distinctUntilChanged()).subscribe( (zip) => {
        console.log('PASSED IN ZIP', typeof zip);
        console.log('COMPONENT ZIP', this.zip);
        this.searchService.createWeatherAPICallObservable(zip)
        .subscribe( (response) => {
          console.log('HTTP CALL MADE! weather object set');
          this.weatherObject = response.json();
        });

        // WITHOUT USING SERVICE
        // this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + this.zip +
        // ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
        // .subscribe( (response) => {
        //   console.log('HTTP CALL MADE! weather object set');
        //   this.weatherObject = response.json();
        // });
      });
    }
    searchWeather(inputZipCode) {
      console.log('WALK AND RUN', inputZipCode);
      // this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + this.zip +
      //  ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
      //  .toPromise()
      //  .then( (response) => {
        //   console.log('THE RESPONSE', response);
        //   console.log('RESPONSE.DATA', response.json());
        //   this.weatherObject = response.json();
        //  });
        // this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + this.zip +
        //  ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
        //  .subscribe( (response) => {
          //    this.searchSubject.next(inputZipCode);
          //    this.weatherObject = response.json();
          //  });
      this.searchSubject.next(inputZipCode);
    }
}
