import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  public message: string;
  public items: Item[] = [];
  public total = 0;

  public paymentMethod: string;

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit() {
      this.OnCartLoad();
  }

  OnCartLoad(): void {
      this.cartService.getAllfromCart().subscribe(items => this.items = items);
  }

  OnCartCheckout(): void {
    console.log(this);
  }

  OnRemoveFromCart(item: Item): void {
      const onRemoveResult = this.cartService.removeFromCart(item);
      if (onRemoveResult === true) {
          this.message = 'Item ' + item.product.name + ' has been removed from the cart';
          for (let i = 0; i < this.items.length; i++) {
              if (this.items[i].product.id === item.product.id) {
                  setTimeout(() => {
                      if (item.quantity > 1) {
                          this.items[i].quantity --;
                      } else {
                          this.items.splice(i, 1);
                      }
                  }, 200);
              }
          }
      } else {
          this.message = 'There is an error occured: ' + onRemoveResult;
      }
  }

  OnQuantityIncrease(item: Item): void {
      item.quantity++;
  }

  OnQuantityDecrease(item: Item): void {
    this.OnRemoveFromCart(item);
  }

  OnCartClear(): void {
      console.log('Cart.component.OnClearCart');
      const onClearCart = this.cartService.clearCart();
      if (onClearCart === true) {
          for (let i = 0; i < this.items.length; i++) {
            setTimeout(() => {
                this.items.splice(i, 1);
            }, 1000);
          }
          this.message = 'The cart has been cleared. Continue shopping';
      } else {
          this.message = 'There is an error with cart clear: ' + onClearCart;
      }
  }
}
