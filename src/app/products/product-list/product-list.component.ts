import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products: Observable<Product[]>;
  private prods: Product[];
  private selectedId: number;
  private message: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.products = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.productService.getProducts();
      })
    );
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.prods = products);
  }

  OnAddCart(product: Product): void {
    const onAddResult = this.cartService.addToCart(product);
    const onSuccess = 'Prodcut ' + product.name + ' has been added into the cart';
    const onError = 'There is an error occured: ' + onAddResult;
    this.message = ((onAddResult === true) ? onSuccess : onError);
    if (onAddResult) {
      this.toastr.success('Товар <b>' + product.name + '</b> додано до кошика. <br /><u>Клацни, щоб відкрити</u>', '')
      .onTap
      .pipe(take(1))
      .subscribe(() => this.GoToCart());
    } else {
      this.toastr.error('Не можу додати товар ' + product.name + ' до кошика', '');
    }
  }

  GoToCart(): void {
    this.router.navigate(['/cart']);
  }

}
