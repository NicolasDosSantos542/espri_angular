import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.css', '../attributs.component.css']
})
export class InfosComponent implements OnInit {
    idValues = ['Nom', 'Lignée', 'Age'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
