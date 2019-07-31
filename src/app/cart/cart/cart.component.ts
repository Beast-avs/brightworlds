import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { CartService } from '../cart.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientService } from '../../utils/http-client.service';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    @ViewChild('btnClose', {static: false}) closeBtn: ElementRef;

    public message: string;
    public items: Item[] = [];
    public total = 0;
    checkoutForm = new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        phone: new FormControl(''),
        city: new FormControl(''),
        office: new FormControl(''),
        isCallBack: new FormControl(''),
        paymentMethodCash: new FormControl(''),
        paymentMethodCard: new FormControl(''),
        comment: new FormControl(''),
        items: new FormControl('')
    });

  public paymentMethod: string;

  constructor(
      private cartService: CartService,
      private httpService: HttpClientService
  ) { }

  ngOnInit() {
      this.OnCartLoad();
  }

  OnCartLoad(): void {
      this.cartService.getAllfromCart().subscribe(items => this.items = items);
  }

  OnCartCheckout(): void {
    this.closeBtn.nativeElement.click();
    this.checkoutForm.get('items').setValue(this.items);

    this.httpService.setCheckoutRequest(this.checkoutForm.value).subscribe(result => {
        this.message = JSON.parse(JSON.stringify(result)).result;
    });
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
