import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  zip: any;
  weatherObject: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.zip = '94107';
  }

  showSearchTerm(inputZipCode) {
    console.log(inputZipCode);
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + this.zip +
     ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
     .toPromise()
     .then( (response) => {
      console.log('THE RESPONSE', response);
      console.log('RESPONSE.DATA', response.json());
      this.weatherObject = response.json();
     });

  }

}
