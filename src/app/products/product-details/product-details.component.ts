import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;
  // product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.productService.getProduct(params.get('id'))
      )
    );
  }

  OnAddCart(product: Product): void {
    const onAddResult = this.cartService.addToCart(product);
    if (onAddResult) {
      this.toastr.success('Товар ' + product.name + ' додано до кошика', '', {timeOut: 3000, positionClass: 'toast-bottom-right'});
    } else {
      this.toastr.error('Не можу додати товар ' + product.name + ' до кошика', '', {timeOut: 3000});
    }
  }

  gotoProducts(product: Product) {
    const productId = product ? product.id : null;
    this.router.navigate(['/products', { id: productId }]);
  }

}
