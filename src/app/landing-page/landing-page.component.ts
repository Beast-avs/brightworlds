import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../utils/http-client.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  comicsLogo = './assets/images/comics_1.jpg';
  // tslint:disable-next-line:max-line-length
  comicsImages: Array<string> = ['./assets/images/origins_1.jpg', './assets/images/origins_2.jpg', './assets/images/origins_3.jpg', './assets/images/origins_4.jpg', './assets/images/origins_5.jpg', './assets/images/comics_1.jpg'];
  artistLogo = './assets/images/artist_2.jpg';
  // tslint:disable-next-line:max-line-length
  artistImages: Array<string> = ['./assets/images/artist_2.jpg'];
  worksLogo = './assets/images/works_1.jpg';
  // tslint:disable-next-line:max-line-length
  worksImages: Array<string> = ['./assets/images/works_1.jpg', './assets/images/works_2.jpg', './assets/images/works_3.jpg'];
  // public cities: Observable<any>;
  // public offices: Observable<any>;

  // public products: Observable<any>;

  constructor(
    private httpService: HttpClientService
  ) { }

  ngOnInit() {
    // this.httpService.getCitiesNP().subscribe(
    //   cities => this.cities = cities
    // );
  }

  // OnLoadOfficesByCity(cityRef: string) {
  //   this.httpService.getOfficesInCityNP(cityRef).subscribe(
  //     offices => this.offices = offices
  //   );
  // }

  // OnLoadProducts() {
  //   console.log('OnLoadProducts');
  //   this.httpService.getProducts().subscribe(
  //     products => {
  //       // console.log(products);
  //       this.products = products;
  //     }
  //   );
  // }

}
