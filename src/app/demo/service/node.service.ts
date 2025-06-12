import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { TreeNode } from 'primeng/api';

@Injectable({
	providedIn: 'root',
})
export class NodeService {

	constructor(private http: HttpClient) { }

        getFiles() {
                return firstValueFrom(
                        this.http.get<any>('assets/demo/data/files.json')
                ).then(res => res.data as TreeNode[]);
        }

        getLazyFiles() {
                return firstValueFrom(
                        this.http.get<any>('assets/demo/data/files-lazy.json')
                ).then(res => res.data as TreeNode[]);
        }

        getFilesystem() {
                return firstValueFrom(
                        this.http.get<any>('assets/demo/data/filesystem.json')
                ).then(res => res.data as TreeNode[]);
        }

        getLazyFilesystem() {
                return firstValueFrom(
                        this.http.get<any>('assets/demo/data/filesystem-lazy.json')
                ).then(res => res.data as TreeNode[]);
        }
}
