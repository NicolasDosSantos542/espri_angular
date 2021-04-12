import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-list',
    templateUrl: './input-list.component.html',
    styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {

    @Input() value: string;
    isInEdition = false;
    listValues = [];
    str = '';
    islist: false;

    validate(value) {
        this.isInEdition = this.isInEdition === false;
        this.listValues.push(value);
        this.str = '';
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick() {

    }
}
