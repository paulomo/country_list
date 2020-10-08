import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

export interface CountryDetail {
  flag: string;
  name: string;
  capital: string;
  population: number;
  region: string;
  languages: [];
  timezones: string;
  callingCodes: string;
  currencies: [];
  subregion: string;
}

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  response: Object;
  country: CountryDetail;

  constructor( private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit(){
    const firstParam: string = this.route.snapshot.paramMap.get('name');
    this._http.getCountry(firstParam).subscribe(data => {
      this.response = data[0]
      console.log(this.response)
      this.country = this.response as CountryDetail
    });
  }

}
