import { Component, OnInit } from '@angular/core';

import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart/cart.component';
import { Item } from './cart/cart/item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Магазинчик BrightWorlds';

  constructor(private cartService: CartService ) {}

  public cart: CartComponent;
  public itemsQuantity = 0;

  ngOnInit() {
    this.itemsQuantity = this.cartService.items.length;
  }
}
