import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Image } from 'src/app/demo/api/image';

@Injectable({
	providedIn: 'root',
})
export class PhotoService {

	constructor(private http: HttpClient) { }

        getImages() {
                return firstValueFrom(
                        this.http.get<any>('assets/demo/data/photos.json')
                )
                        .then(res => res.data as Image[])
                        .then(data => data);
        }
}
