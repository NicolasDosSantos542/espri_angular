import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CharactersComponent} from '../characters/characters.component';

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
        console.log(CharactersComponent.characters);
    }

    ngOnInit(): void {
    }
}
