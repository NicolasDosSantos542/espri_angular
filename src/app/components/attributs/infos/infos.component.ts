import {Component, OnInit} from '@angular/core';
import {CharactersComponent} from "../../characters/characters.component";

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

    fillArray(value, attribute) {
        const char = CharactersComponent.characters[0];
        if (attribute === 'nom') {
            char.nom = value;
        } else if (attribute === 'lignee') {
            char.lignee = value;
        } else if (attribute === 'age') {
            char.age = value;
        }
        console.log(char);
    }
}
