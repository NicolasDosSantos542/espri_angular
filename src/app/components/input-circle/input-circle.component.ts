import {Component, OnInit} from '@angular/core';
import {CharactersComponent} from '../characters/characters.component';

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
