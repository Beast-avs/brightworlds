import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Item } from './cart/item';
import { Product } from './cart/product';
import { BonusComponent } from '../products/bonus/bonus.component';
import { ProductService } from '../products/product.service';
import { map, count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private productService: ProductService) {
    console.log('CartService()');
    this.fetchAll();
  }

  private readonly ITEMS = new BehaviorSubject<Item[]>([]);
  private items$ = this.ITEMS.asObservable();

  // private items: Array<Item> = [];

  readonly allItemsInCart$ = this.items$.pipe(
    map(items => this.items.filter(item => item))
  );

  get items(): Item[] {
    // console.log('CartService.itemsInCart', this.ITEMS.getValue());
    return this.ITEMS.getValue();
  }

  set items(itm: Item[]) {
    this.ITEMS.next(itm);
  }

  // These methods could be moved into external service deals with communication with backend (where cart is stored)

  /* get all items from cart
   * for now the cart stored in localStorage
   *
   * TODO: ensure that cart is unique for the session
   */
  loadCart() {
    // console.log('CartService.loadCart', localStorage.getItem('cart'));
    return of (JSON.parse(localStorage.getItem('cart')) || [] );
  }

  saveToCart(item: Item): boolean {
    let result = false;

    let ar: Array<Item>;
    if (JSON.parse(localStorage.getItem('cart')) === null) {
      ar = [];
    } else {
      ar = JSON.parse(localStorage.getItem('cart'));
    }

    if (ar.length < 1) {
      ar.push({quantity: 1, product: item.product});
    } else if (ar.length > 0) {
      const itm = ar.find(it => it.product.id === item.product.id);
      if (itm) {
        itm.quantity += 1;
      } else {
        ar.push({quantity: 1, product: item.product});
      }
    } else {
      const itm: Item = JSON.parse(localStorage.getItem('cart'));
      ar.push(itm);
    }
    localStorage.setItem('cart', JSON.stringify(ar));
    ar = null;
    result = true;

    return result;
  }

  deleteFromCart(item: Item): boolean {
    let result = false;
    result = true;
    return result;
  }

  // Leave these methods that works with cart within the session

  /* Get the cart
   *
   */
  async fetchAll() {
    this.items = await this.loadCart().toPromise();
    // console.log('CartService.fetchAll', this.items);
  }

  async addProductToCart(product: Product) {
    if (product && product.id) {

    }
  }

  getAmountOfItems() {
    // console.log('CartService.getAmountOfItems', this.items);
    let amount = 0;
    this.items$.subscribe(amt => {
      amount = amt.length;
    });

    return amount || 0;
  }

  // Remove everything below this line
  getAllfromCart(): Observable<Item[]> {
    const items: Array<Item> = JSON.parse(localStorage.getItem('cart')) || [];
    let productsNum = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].quantity < 1) {
        items.splice(i, 1);
      }
      if (items[i].product.id.match('PRD')) {
        productsNum += 1 * items[i].quantity;
      }
    }

    // add bonus into cart
    // if (productsNum >= 2) {
    //   this.productService.getBonuses().subscribe(bonuses => {
    //     items.push({quantity: 1, product: bonuses[0]});
    //   });
    // }

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

  // addBonusToCart(): void {
  //   this.productService.getBonuses().subscribe(bonuses => {
  //     this.addToCart(bonuses[0]);
  //   });
  // }

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

  // removeBonusFromCart(): void {
  //   this.productService.getBonuses().subscribe(bonuses => {
  //     this.removeFromCart({quantity: 1, product: bonuses[0]});
  //   });
  // }

  clearCart(): boolean {
    localStorage.removeItem('cart');
    return true;
  }
}
