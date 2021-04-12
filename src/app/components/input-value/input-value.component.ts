import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CharactersComponent} from '../characters/characters.component';

@Component({
    selector: 'app-input-value',
    templateUrl: './input-value.component.html',
    styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
    @Input() value;
    @Output() inputValueToEmit = new EventEmitter<string>();
    isInEdition = false;
    str = '';

    validate(str) {
        const char = CharactersComponent.characters[0];

        if (this.str !== '') {
            this.isInEdition = this.isInEdition === false;
            this.inputValueToEmit.emit(str);
            console.log(char);
            /*const bob = char.filter(data => data === this.value);
            console.log(bob);*/
        }
    }

    constructor() {
        console.log(this.value);
    }

    ngOnInit(): void {
    }
}
