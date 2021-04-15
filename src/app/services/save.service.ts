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
        console.log(element + '-char');
        if (element + '-char' in localStorage) {
            CharactersComponent.character.idSaison = element;
            console.log(CharactersComponent.character);
            CharactersComponent.character = JSON.parse(localStorage.getItem(element + '-char'));
            console.log(localStorage);
        }
    }

    /*
        whatSeasontoBeginWith() {
            if ('winter-char' in localStorage) {
                CharactersComponent.character = JSON.parse(localStorage.getItem('winter-char'));
                console.log(CharactersComponent.character);
            } else if ('spring-char' in localStorage) {
                CharactersComponent.character = JSON.parse(localStorage.getItem('spring-char'));
                console.log(CharactersComponent.character);
            } else if ('summer-char' in localStorage) {
                CharactersComponent.character = JSON.parse(localStorage.getItem('summer-char'));
                console.log(CharactersComponent.character);
            }else if ('autumn-char' in localStorage) {
                CharactersComponent.character = JSON.parse(localStorage.getItem('autumn-char'));
                console.log(CharactersComponent.character);
            }else if ('time-char' in localStorage) {
                CharactersComponent.character = JSON.parse(localStorage.getItem('time-char'));
                console.log(CharactersComponent.character);
            }else {
                localStorage.setItem('winter-char', JSON.stringify(this.character));
                console.log(localStorage);
            }
        }
    */

    saveCharacter(season) {
        localStorage.setItem(season + '-char', JSON.stringify(CharactersComponent.character));

    }

    clearDatas() {
        if (confirm('ceci va définitivement supprimer vos personnages, êtes vous sûr.e?')) {
            localStorage.clear();
            location.reload();
            console.log(localStorage);
        }
    }
}
