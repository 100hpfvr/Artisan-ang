import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Customer } from 'src/app/demo/api/customer';

@Injectable({
    providedIn: 'root',
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/customers-small.json')
        )
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersMedium() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/customers-medium.json')
        )
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersLarge() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/customers-large.json')
        )
            .then(res => res.data as Customer[])
            .then(data => data);
    }

}
