import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-input-value',
    templateUrl: './input-value.component.html',
    styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {


    isInEdition = false;
    str = '';

    validate() {
        if (this.str !== '') {
            this.isInEdition = this.isInEdition === false;
        }
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
