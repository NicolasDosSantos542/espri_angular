import {Injectable} from '@angular/core';
import {CharactersComponent} from '../components/characters/characters.component';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class SaveService {
    characters = CharactersComponent.characters;
    currentID = CharactersComponent.currentCharacterId;
    current = CharactersComponent.characters[this.currentID];

    constructor(private user: UserService) {
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
