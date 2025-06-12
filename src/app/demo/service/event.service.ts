import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) { }

    getEvents() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/scheduleevents.json')
        )
            .then(res => res.data as any[])
            .then(data => data);
    }
}
