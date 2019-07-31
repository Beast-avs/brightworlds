import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    private cartService: CartService
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
  }

  gotoProducts(product: Product) {
    const productId = product ? product.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/products', { id: productId }]);
  }

}
