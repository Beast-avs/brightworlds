import { KeyValue } from '@angular/common';

export class Product {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    logo: string;
    images: Array<string>;
    // pictures: Array<string>;
    options: any; // KeyValue<string, any>;
    price: any; // KeyValue<string, string>;
    inStock: number;
}
