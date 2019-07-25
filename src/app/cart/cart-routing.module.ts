import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

const cartRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  // { path: 'product/:id', component: ProductDetailsComponent }
  { path : 'checkout', component: CheckoutFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
