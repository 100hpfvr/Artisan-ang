import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Product } from 'src/app/demo/api/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/products-small.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/products.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/products-mixed.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/products-orders-small.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersLarge() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/products-orders.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }
}
