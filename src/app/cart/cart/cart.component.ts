import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item';
import { BonusComponent } from '../../products/bonus/bonus.component';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClientService } from '../../utils/http-client.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit, OnDestroy {
    @ViewChild('btnClose', {static: false}) closeBtn: ElementRef;

    public message: any = {};
    public items: Item[] = [];
    private total = 0;

    // public paymentMethod: string;

    constructor(
        private cartService: CartService,
        private httpService: HttpClientService,
        private fb: FormBuilder
    ) { }

    checkoutForm = this.fb.group({
        name: new FormControl(''),
        surname: new FormControl(''),
        phone: new FormControl(''),
        city: new FormControl(''),
        office: new FormControl(''),
        isCallBack: new FormControl(''),
        // paymentMethodCash: new FormControl(''),
        // paymentMethodCard: new FormControl(''),
        paymentMethod: new FormControl(''),
        comment: new FormControl(''),
        items: new FormControl('')
    });

    ngOnInit() {
        this.message.isClose = true;
        this.OnCartLoad();
    }

    ngOnDestroy() {
        // fix modal backgroup presence after pressing back in the location history
    }

    calculateTotal(): void {
        if (!this.items) {
            this.total = 0;
        }
        let tot = 0;
        for (const item of this.items) {
            const price = item.product.price.uah.match(/\d+/g)[1] || 0;
            tot += item.quantity * price;
        }
        this.total = tot;
    }

    OnCartLoad(): void {
        this.items = [];
        this.cartService.getAllfromCart().subscribe(items => {
            this.items = items;
        });
        this.calculateTotal();
    }

    OnCartCheckout(): void {
        this.closeBtn.nativeElement.click();
        this.checkoutForm.get('items').setValue(this.items);

        // testing
        const obj = {result: 'success', order: 'TEST_ORDER_#NUM', timestamp: '2019-Aug-09 23:45:43'};
        this.message.timestamp = obj.timestamp;
        switch (obj.result) {
            case 'success':
                this.message.type = 'success';
                this.message.text = 'Дякую за замовлення. Зараєстровано за номором ' + obj.order;
                break;
                case 'error':
                    this.message.type = 'danger';
                    this.message.text = 'Ой-йой! Якась помилка на сервері :(';
                    console.log('Error when sending to server', obj);
                    break;
                }
        console.log(this.checkoutForm);

        // this.httpService.setCheckoutRequest(this.checkoutForm.value)
        // .subscribe(result => {
        //     const obj: any = JSON.parse(JSON.stringify(result));
        //     this.message.timestamp = obj.timestamp;
        //     switch (obj.result) {
        //         case 'success':
        //             this.message.type = 'success';
        //             this.message.text = 'Дякую за замовлення. Зараєстровано за номором ' + obj.order;
        //             break;
        //         case 'error':
        //             this.message.type = 'danger';
        //             this.message.text = 'Ой-йой! Якась помилка на сервері :(';
        //             console.log('Error when sending to server', obj);
        //             break;
        //     }
        // },
        // error => {
        //     setTimeout(() => this.message.isClose = true, 5000);
        //     this.message.type = 'danger';
        //     this.message.text = 'Ой-йой! Якась помилка на сервері :(';
        //     console.log('Error when sending to server', this.message);
        //     this.message.isClose = false;
        // });
    }

    OnRemoveFromCart(item: Item): void {
        setTimeout(() => this.message.isClose = true, 5000);
        const onRemoveResult = this.cartService.removeFromCart(item);
        if (onRemoveResult === true) {
            this.message.type = 'success';
            this.message.text = 'Товар ' + item.product.name + ' видалено з кошика';
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].product.id === item.product.id) {
                    if (this.items[i].quantity > 1) {
                        if (this.items[i].quantity < 2) {
                            // remove bonus
                            this.OnRemoveBonus();
                        }
                        this.items[i].quantity --;
                    } else {
                        this.items.splice(i, 1);
                    }
                }
            }
        } else {
            this.message.type = 'danger';
            this.message = 'Ой-йой, не вдалося видалити товар';
            console.log('Unable to remove ' + item.product.id + ' from cart');
            console.log(onRemoveResult);
        }
        this.message.isClose = false;
        this.calculateTotal();
    }

    OnQuantityIncrease(item: Item): void {
        let productsNum = 0;
        for (const itm of this.items) {
            if (itm.product.id === item.product.id) {
                if (itm.quantity > 0) {
                    itm.quantity ++;
                }
            }
            productsNum += 1 * itm.quantity;
        }

        if (productsNum >= 2) {
            this.OnAddBonus();
        }

        this.calculateTotal();
    }

    OnQuantityDecrease(item: Item): void {
        this.OnRemoveFromCart(item);
    }

    OnCartClear(): void {
        setTimeout(() => this.message.isClose = true, 5000);
        const onClearCart = this.cartService.clearCart();
        if (onClearCart === true) {
            this.OnCartLoad();
            this.message.type = 'success';
            this.message.isClose = false;
            this.message.text = 'Кошик порожній. Нумо продовжувати шопінг!';
        } else {
            this.message.type = 'danger';
            this.message.text = 'Ой-йой, не вдалося видалити товар';
            console.log('Unable to clear cart');
            console.log(onClearCart);
        }
        this.calculateTotal();
    }

    OnAddBonus(): void {
        this.cartService.addBonusToCart();
    }

    OnRemoveBonus(): void {
        this.cartService.removeBonusFromCart();
    }
}
