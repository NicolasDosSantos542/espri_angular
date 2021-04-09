import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-list-content',
    templateUrl: './input-list-content.component.html',
    styleUrls: ['./input-list-content.component.css']
})
export class InputListContentComponent implements OnInit {
    isInEdition = false;
    str = '';
    islist: false;
    @Input() contentValue;

    validate() {


        this.isInEdition = this.isInEdition === false;

    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
