import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-long-text',
    templateUrl: './input-long-text.component.html',
    styleUrls: ['./input-long-text.component.css']
})
export class InputLongTextComponent implements OnInit {
    isInEdition = false;
    str = '';
    islist: false;


    validate() {
        this.isInEdition = this.isInEdition === false;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
