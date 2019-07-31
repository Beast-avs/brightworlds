import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './cart/item';
import { Product } from './cart/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<Item> = [];

  constructor() { }

  getAllfromCart(): Observable<Item[]> {
    return of(JSON.parse(localStorage.getItem('cart')));
  }

  addToCart(prod: Product): boolean {
    let ar: Array<Item>;
    if (JSON.parse(localStorage.getItem('cart')) === null) {
      ar = [];
    } else {
      ar = JSON.parse(localStorage.getItem('cart'));
    }
    if (ar.length < 1) {
      ar.push({quantity: 1, product: prod});
    } else if (ar.length > 0) {
      const itm = ar.find(item => item.product.id === prod.id);
      if (itm) {
        itm.quantity += 1;
      } else {
        ar.push({quantity: 1, product: prod});
      }
    } else {
      const item: Item = JSON.parse(localStorage.getItem('cart'));
      ar.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(ar));
    ar = null;
    return true;
  }

  removeFromCart(item: Item): boolean {
    let ar: Array<Item>;
    if (JSON.parse(localStorage.getItem('cart')) === null) {
      ar = [];
    } else {
      ar = JSON.parse(localStorage.getItem('cart'));
    }
    for (let i = 0; i < ar.length; i++) {
      if (ar[i].product.id === item.product.id) {
          if (item.quantity > 1) {
              ar[i].quantity --;
          } else {
              ar.splice(i, 1);
          }
      }
    }
    localStorage.setItem('cart', JSON.stringify(ar));
    ar = null;
    return true;
  }

  clearCart(): boolean {
    localStorage.removeItem('cart');
    return true;
  }
}
