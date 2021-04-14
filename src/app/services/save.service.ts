import {Injectable} from '@angular/core';
import {CharactersComponent} from '../components/characters/characters.component';

@Injectable({
    providedIn: 'root'
})
export class SaveService {
    characters = CharactersComponent.characters;
    currentID = CharactersComponent.currentCharacterId;
    current = CharactersComponent.characters[this.currentID];

    constructor() {
    }

    initPage() {
        if ('char' || 'bob' in localStorage) {
            console.log(localStorage);
            CharactersComponent.characters = JSON.parse(localStorage.getItem('char'));
        } else {
            localStorage.setItem('bob', 'coucou');
            console.log(localStorage);

        }
    }

    saveCharacter(season) {
        localStorage.setItem(season + 'char', JSON.stringify(CharactersComponent.characters));

    }

    clearDatas() {
        if (confirm('ceci va définitivement supprimer vos personnages, êtes vous sûr.e?')) {
            localStorage.clear();
        }
    }
}
