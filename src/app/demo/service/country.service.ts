import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CountryService {

	constructor(private http: HttpClient) { }

        getCountries() {
                return firstValueFrom(
                        this.http.get<any>('assets/demo/data/countries.json')
                )
                        .then(res => res.data as any[])
                        .then(data => data);
        }
}
