import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CartModule { }
