import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'app-season-describe',
    templateUrl: './season-describe.component.html',
    styleUrls: ['./season-describe.component.css']
})
export class SeasonDescribeComponent implements OnInit {
    @Input() seasonDescribe;

    constructor() {
        console.log('toto' + this.seasonDescribe);
    }

    ngOnInit() {
    }

}
