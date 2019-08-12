import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
          CityDescription: cityName
        },
        apiKey: '6f739788bbe4871e789e460f48ea9866'
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

  getProducts(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const hdr = new HttpHeaders({'Gdata-version': '3.0', Authorization: 'Bearer ya29.GltSB9NmQoVoS8nKfvT20EKEWQe0cs96NIHgmDIbUbR4sNjXY07nRDE6I-rmJRSil4Zal-ehYyWEZRuviBhBywR-bWguPKItKqLdAlF9F_5_7w0tmu5IIZiXS2nz'});

    return this.http.get(
      // tslint:disable-next-line:max-line-length
      'https://sheets.googleapis.com/v4/spreadsheets/1dRNb20ULrzI5wuR-wa2gSaT570mfRv3enZ1lGSOBZ7E/values/a1:i100',
      {headers: hdr}
    ).pipe(map(
      data => {
        const ar = JSON.parse(JSON.stringify(data)).values;
        // skip header
        const ar2 = [];
        for (let i = 0; i < ar.length; i++) {
          if (i > 0) {
            ar2.push(ar[i]);
          }
        }
        return ar2;
      }
    ));
    }

  setCheckoutRequest(data: string): Observable<any> {
    return this.http.post(
      'https://script.google.com/macros/s/AKfycbxAFYuc_AGK9h6RUSRFZnGSo9w7U0lp1BHDqhQaWrumQgJrL6sw/exec',
      data,
      {headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'text/plain'
      })}
    ).pipe(map(
      result => {
        // console.log(result);
        return result;
      },
      error => {
        return error;
      }
    ));
  }
}
