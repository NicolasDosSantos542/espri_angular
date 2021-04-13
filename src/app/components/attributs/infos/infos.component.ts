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
        const X = CharactersComponent.currentCharacterId;
        const char = CharactersComponent.characters[X];
        if (attribute === 'nom') {
            // @ts-ignore
            char.nom = value;
        } else if (attribute === 'lignee') {
            // @ts-ignore
            char.lignee = value;
        } else if (attribute === 'age') {
            // @ts-ignore
            char.age = value;
        }
        localStorage.setItem('char', JSON.stringify(CharactersComponent.characters));
    }
}
