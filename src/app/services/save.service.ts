import {Injectable} from '@angular/core';
import {CharactersComponent} from '../components/characters/characters.component';

@Injectable({
    providedIn: 'root'
})
export class SaveService {
    character = CharactersComponent.character;

    constructor() {
    }

    initPage() {
        if ('winter-char' && 'spring-char' && 'summer-char' && 'autumn-char' && 'time-char' in localStorage) {
            CharactersComponent.character = JSON.parse(localStorage.getItem('winter-char'));
        } else {
            const array = ['winter', 'spring', 'summer', 'autumn', 'time'];
            array.forEach(element => {
                CharactersComponent.character.idSaison = element;
                localStorage.setItem(element + '-char', JSON.stringify(CharactersComponent.character));
            });
        }
    }

    changeSeason(element) {
        if (element + '-char' in localStorage) {
            CharactersComponent.character = CharactersComponent.emptyCharacter;
            CharactersComponent.character = JSON.parse(localStorage.getItem(element + '-char'));
            console.log(CharactersComponent.character);
        }
    }

    saveCharacter(season) {
        console.log(season);
        localStorage.setItem(season + '-char', JSON.stringify(CharactersComponent.character));
        console.log(localStorage);

    }

    clearDatas() {
        if (confirm('ceci va définitivement supprimer vos personnages, êtes vous sûr.e?')) {
            localStorage.clear();
            location.reload();
            console.log(localStorage);
        }
    }
}
