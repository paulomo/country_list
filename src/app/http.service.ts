import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

  getCountry(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
  }
}
