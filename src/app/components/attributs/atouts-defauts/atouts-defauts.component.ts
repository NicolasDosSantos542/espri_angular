import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-atouts-defauts',
    templateUrl: './atouts-defauts.component.html',
    styleUrls: ['./atouts-defauts.component.css', '../attributs.component.css']
})
export class AtoutsDefautsComponent implements OnInit {
    atoutsDefauts = ['Atouts', 'Defauts'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
