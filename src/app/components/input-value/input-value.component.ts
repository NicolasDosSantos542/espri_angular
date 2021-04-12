import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CharactersComponent} from '../characters/characters.component';

@Component({
    selector: 'app-input-value',
    templateUrl: './input-value.component.html',
    styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
    @Output() inputValueToEmit = new EventEmitter<string>();
    isInEdition = false;
    str = '';

    validate(str) {
        if (this.str !== '') {
            this.isInEdition = this.isInEdition === false;
            this.inputValueToEmit.emit(str);
        }
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
