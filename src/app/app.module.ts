import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// import { GoogleApiModule, GoogleApiService, GoogleAuthService, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleApiConfig } from 'ng-gapi';

// const gapiClientConfig: NgGapiClientConfig = {
//   client_id: '933109428849-jvv5i57f4it53sjd3cbbqgujr0qkrvt9.apps.googleusercontent.com',
//   discoveryDocs: [
//     'https://sheets.googleapis.com/$discovery/rest?version=v4'
//   ],
//   // ux_mode: 'redirect',
//   // redirect_uri: 'https://ng-gapi-example.stackblitz.io/redirect',
//   scope: ['https://www.googleapis.com/auth/spreadsheets.readonly'].join(' ')
// };

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ProductsModule,
    CartModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
    // GoogleApiModule.forRoot({
    //   provide: NG_GAPI_CONFIG,
    //   useValue: gapiClientConfig
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
