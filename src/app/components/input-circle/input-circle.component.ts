import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-circle',
    templateUrl: './input-circle.component.html',
    styleUrls: ['./input-circle.component.css']
})
export class InputCircleComponent implements OnInit {
    isInEdition = false;
    str = '';


    constructor() {
    }

    ngOnInit(): void {
    }

    validate() {
        this.isInEdition = this.isInEdition === false;
    }

}
