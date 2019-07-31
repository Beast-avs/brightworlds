import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor() { }

    getProducts(): Observable<Product[]> {
        return of(PRODUCTS);
    }

    getProduct(id: string | number) {
        return this.getProducts().pipe(
            map(
                (products: Product[]) => {
                        return products.find(product => product.id === id);
                    }
                )
          );
    }
}
