import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CharactersComponent} from '../../characters/characters.component';

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.css', '../attributs.component.css']
})
export class InfosComponent implements OnInit {
    idValues = ['nom', 'lignee', 'age'];
    @Input() currentSeason: any;

    constructor() {
    }

    ngOnInit(): void {

    }

    fillArray(value, attribute) {
        /* console.log(X);
         const char = CharactersComponent.characters[X];
         if (attribute === 'nom') {
             char.nom = value;
         } else if (attribute === 'lignee') {
             char.lignee = value;
         } else if (attribute === 'age') {
             char.age = value;
         }*/
    }
}
