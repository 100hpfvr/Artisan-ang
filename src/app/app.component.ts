import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'Artisan';

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }

}
