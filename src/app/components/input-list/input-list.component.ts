import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-list',
    templateUrl: './input-list.component.html',
    styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {

    public iconePlus = 'assets/plus.png';

    @Input() value;
    isInEdition = false;
    listValues = [];
    str = '';
    islist: false;

    onClick() {
        this.isInEdition = true;
    }

    validate(value) {
        this.isInEdition = false;
        console.log(this.str);
        this.listValues.push(value);
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
