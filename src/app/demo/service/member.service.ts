import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Member } from 'src/app/demo/api/member';

@Injectable({
    providedIn: 'root',
})
export class MemberService {

    constructor(private http: HttpClient) { }

    getMembers() {
        return firstValueFrom(
            this.http.get<any>('assets/demo/data/members.json')
        )
            .then(res => res.data as Member[])
            .then(data => data);
    }
}
