import {Injectable} from '@angular/core';
import {CharactersComponent} from '../components/characters/characters.component';
import {SaveService} from './save.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private save: SaveService) {
    }

    displayDatas(element) {
        const char = CharactersComponent.character;
        switch (element) {
            case 'nom':
                return char.nom;
            case 'lignee':
                return char.lignee;
            case 'age':
                return char.age;
            case 'role':
                return char.role;
            case 'talents':
                return char.talents;
            case 'atouts':
                return char.atouts;
            case 'defauts':
                return char.defauts;
            case 'harmonie':
                return char.harmonie;
            case 'rupture':
                return char.rupture;
            case 'sante':
                return char.sante;
            case 'relations':
                return char.relations;
            case 'hiver':
                return char.hiver;
            case 'printemps':
                return char.printemps;
            case 'ete':
                return char.ete;
            case 'automne':
                return char.automne;
            case 'devotion':
                return char.devotion;
            case 'talisman':
                return char.talisman;
            case 'liturgie':
                return char.liturgie;
            case 'sortileges':
                return char.sortileges;
            case 'materiel':
                return char.materiel;
        }
    }

    setData(element, value) {
        const char = CharactersComponent.character;
        switch (element) {
            case 'nom':
                char.nom = value;
                console.log(char);
                break;
            case 'lignee':
                char.lignee = value;
                break;
            case 'age':
                char.age = value;
                break;
            case 'role':
                char.role = value;
                break;
            case 'talents':
                char.talents = value;
                break;
            case 'atouts':
                char.atouts = value;
                break;
            case 'defauts':
                char.defauts = value;
                break;
            case 'harmonie':
                char.harmonie = value;
                break;
            case 'rupture':
                char.rupture = value;
                break;
            case 'sante':
                char.sante = value;
                break;
            case 'relations':
                char.relations = value;
                break;
            case 'hiver':
                char.hiver = value;
                break;
            case 'printemps':
                char.printemps = value;
                break;
            case 'ete':
                char.ete = value;
                break;
            case 'automne':
                char.automne = value;
                break;
            case 'devotion':
                char.devotion = value;
                break;
            case 'talisman':
                char.talisman = value;
                break;
            case 'liturgie':
                char.liturgie = value;
                break;
            case 'sortileges':
                char.sortileges = value;
                break;
            case 'materiel':
                char.materiel = value;
                break;
        }
        console.log(char);
        this.save.saveCharacter(char.idSaison);
    }

}


