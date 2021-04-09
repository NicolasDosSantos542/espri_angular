import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-score',
    templateUrl: './input-score.component.html',
    styleUrls: ['./input-score.component.css']
})
export class InputScoreComponent implements OnInit {

    isInEdition = false;
    str = '';

    validate() {
        if (this.str !== '' ) {
            this.isInEdition = this.isInEdition === false;
        }
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
