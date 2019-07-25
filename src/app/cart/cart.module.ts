import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutFormComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
