import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { NovaPoshta } from '../settings/novaposhta';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  // private np: NovaPoshta;
  // private http: HttpClient;

  constructor( private http: HttpClient ) { }

  getCitiesNP(): Observable<any> {
    const body = {
        modelName: 'Address',
        calledMethod: 'getCities',
        apiKey: '6f739788bbe4871e789e460f48ea9866'
    };

    return this.http.post(
      'https://api.novaposhta.ua/v2.0/json/',
      body
    ).pipe(map(
      data => {
        return JSON.parse(JSON.stringify(data)).data;
      }
    ));
  }

  getOfficesInCityNP(cityName: string): Observable<any> {
    const body = {
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          // CityRef: city
          CityDescription: cityName
        },
        apiKey: '6f739788bbe4871e789e460f48ea9866' // this.np.getAPIKey()
    };

    return this.http.post(
      'https://api.novaposhta.ua/v2.0/json/',
      body
    ).pipe(map(
      data => {
        console.log(JSON.parse(JSON.stringify(data)).data);
        return JSON.parse(JSON.stringify(data)).data;
      }
    ));
  }
}
