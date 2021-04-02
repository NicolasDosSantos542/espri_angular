import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-relations',
    templateUrl: './relations.component.html',
    styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
    numberOfRows = 0;
    fakeArray = new Array(this.numberOfRows);

    constructor() {
    }

    ngOnInit(): void {
    }

    onPlusClick() {
        /*this.isEditable = true;*/
        this.fakeArray = new Array(this.numberOfRows );
        this.numberOfRows += 1;
    }

    onMinusClick() {
        this.fakeArray = new Array(this.numberOfRows );
        this.numberOfRows -= 1;
    }
}
