import {Injectable} from '@angular/core';
import {CharactersComponent} from '../components/characters/characters.component';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class SaveService {
    character = CharactersComponent.character;

    constructor(private user: UserService) {
    }

    initPage() {
        if ('winter-char' || 'spring-char' || 'summer-char' || 'autumn-char' || 'time-char' in localStorage) {
            console.log(localStorage);
            CharactersComponent.character = JSON.parse(localStorage.getItem('char'));
        } else {
            localStorage.setItem('winter-char', JSON.stringify(this.character));
            console.log(localStorage);

        }
    }

    saveCharacter(season) {
        localStorage.setItem(season + '-char', JSON.stringify(CharactersComponent.character));

    }

    clearDatas() {
        if (confirm('ceci va définitivement supprimer vos personnages, êtes vous sûr.e?')) {
            localStorage.clear();
            console.log(localStorage);
        }
    }
}
