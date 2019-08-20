import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item';
// import { BonusComponent } from '../../products/bonus/bonus.component';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../utils/http-client.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { timeout } from 'q';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit, OnDestroy {
    @ViewChild('btnClose', {static: false}) closeBtn: ElementRef;

    public message: any = {};
    public items: Item[] = [];
    public itemsS: Observable<Item[]>;
    public total = 0;
    public submitted = false;
    public paymentMethod;


    constructor(
        private cartService: CartService,
        private httpService: HttpClientService,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    checkoutForm = this.fb.group({
        // tslint:disable-next-line:max-line-length
        name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[\w\u0400-\u04ff]{2,}([\-*\ *][\w\u0400-\u04ff]*){0,1}')]),
        // tslint:disable-next-line:max-line-length
        surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[\w\u0400-\u04ff]{2,}[\-\w\u0400-\u04ff]*')]),
        // phone: new FormControl('', [Validators.required, Validators.pattern('/\+?[0-9]{2,3}[(]?[0-9]{2,3}[)]?\-*\s*[0-9]\-*[0-9]/')]),
        phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
        city: new FormControl('', [Validators.required]),
        office: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
        isCallBack: new FormControl('true'),
        // paymentMethodCash: new FormControl(''),
        // paymentMethodCard: new FormControl(''),
        paymentMethod: new FormControl('', [Validators.required]),
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
            const price = item.product.price.uah.match(/\d+/g)[1] || item.product.price.uah.match(/\d+/g)[0] || 0;
            tot += item.quantity * price;
        }
        this.total = tot;
    }

    OnCartLoad(): void {
        // console.log('Cart.OnCartLoad', this.cartService.items);
        this.items = [];
        this.cartService.getAllfromCart().subscribe(items => {
            this.items = items;
        });
        this.calculateTotal();
    }

    OnCartCheckout(): void {
        this.submitted = true;
        if (this.checkoutForm.invalid) {
            return;
        }
        this.closeBtn.nativeElement.click();
        this.checkoutForm.get('items').setValue(this.items);
        this.message.isClose = false;

        // testing
        // const obj = {result: 'success', order: 'TEST_ORDER_#NUM', timestamp: '2019-Aug-09 23:45:43'};
        // this.message.timestamp = obj.timestamp;
        // switch (obj.result) {
        //     case 'success':
        //         this.message.type = 'success';
        //         this.message.text = 'Дякую за замовлення. Зараєстровано за номором ' + obj.order;
        //         this.OnCartClear();
        //         break;
        //     case 'error':
        //         this.message.type = 'danger';
        //         this.message.text = 'Ой-йой! Якась помилка на сервері :(';
        //         console.log('Error when sending to server', obj);
        //         break;
        // }
        // console.log('Cart.OnCartCheckout', this.checkoutForm);

        this.httpService.setCheckoutRequest(this.checkoutForm.value)
        .subscribe(result => {
            const obj: any = JSON.parse(JSON.stringify(result));
            this.message.timestamp = obj.timestamp;
            switch (obj.result) {
                case 'success':
                    this.message.type = 'success';
                    this.message.text = 'Дякую за замовлення. Зараєстровано за номором ' + obj.order;
                    this.OnCartClear();
                    break;
                case 'error':
                    this.message.type = 'danger';
                    this.message.text = 'Ой-йой! Якась помилка на сервері :(';
                    console.log('Error when sending to server', obj);
                    break;
            }
        },
        error => {
            setTimeout(() => this.message.isClose = true, 5000);
            this.message.type = 'danger';
            this.message.text = 'Ой-йой! Якась помилка на сервері :(';
            console.log('Error when sending to server', this.message);
            this.message.isClose = false;
        });
    }

    OnRemoveFromCart(item: Item): void {
        const onRemoveResult = this.cartService.removeFromCart(item);
        if (onRemoveResult === true) {
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
            this.toastr.error('Ой-йой, не вдалося видалити товар', '');
            console.log('Unable to remove ' + item.product.id + ' from cart', onRemoveResult);
        }
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
            if (itm.product.id.match('PRD')) {
                productsNum += 1 * itm.quantity;
            }
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
        const onClearCart = this.cartService.clearCart();
        if (onClearCart === true) {
            this.OnCartLoad();
            // this.toastr.success('Кошик порожній. Нумо продовжувати шопінг!', '', {timeOut: 3000});
        } else {
            this.toastr.error('Ой-йой, не вдалося видалити товар', '');
            console.log('Unable to clear cart', onClearCart);
        }
        this.calculateTotal();
    }

    OnAddBonus(): void {
        // this.cartService.addBonusToCart();
        // this.OnCartLoad();
    }

    OnRemoveBonus(): void {
        // this.cartService.removeBonusFromCart();
    }
}
