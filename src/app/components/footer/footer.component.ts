import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    @Input() seasonDescribe: object;

    constructor() {
        console.log('tata' + this.seasonDescribe);
    }

    ngOnInit(): void {
    }

}
