import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../utils/http-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  private cities: Observable<any>;
  private offices: Observable<any>;

  constructor(
    private httpService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpService.getCitiesNP().subscribe(
      cities => this.cities = cities
    );
  }

  OnLoadOfficesByCity(cityRef: string) {
    this.httpService.getOfficesInCityNP(cityRef).subscribe(
      offices => this.offices = offices
    );
  }

}
