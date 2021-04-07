import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-relations',
    templateUrl: './relations.component.html',
    styleUrls: ['./relations.component.css', '../main-left.component.css']
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
        this.numberOfRows += 1;
        this.fakeArray = Array(this.numberOfRows);

    }

    onMinusClick() {
        this.numberOfRows -= 1;
        this.fakeArray = Array(this.numberOfRows);
        if (this.numberOfRows < 0) {
            this.numberOfRows = 0;
        }
    }
}
