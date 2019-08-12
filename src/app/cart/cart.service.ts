import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './cart/item';
import { Product } from './cart/product';
import { BonusComponent } from '../products/bonus/bonus.component';
import { ProductService } from '../products/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<Item> = [];

  constructor(private productService: ProductService) { }

  getAllfromCart(): Observable<Item[]> {
    const items: Array<Item> = JSON.parse(localStorage.getItem('cart')) || [];
    let productsNum = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].quantity < 1) {
        items.splice(i, 1);
      }
      productsNum += 1 * items[i].quantity;
    }

    // add bonus into cart
    if (productsNum >= 2) {
      this.productService.getBonuses().subscribe(bonuses => {
        items.push({quantity: 1, product: bonuses[0]});
      });
    }

    return of(items);
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

  addBonusToCart(): void {
    this.productService.getBonuses().subscribe(bonuses => {
      this.addToCart(bonuses[0]);
    });
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

  removeBonusFromCart(): void {
    this.productService.getBonuses().subscribe(bonuses => {
      this.removeFromCart({quantity: 1, product: bonuses[0]});
    });
  }

  clearCart(): boolean {
    localStorage.removeItem('cart');
    return true;
  }
}
