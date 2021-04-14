import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    static characters = [
        {
            idSaison: 'winter',
            id: 0,
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: [{etat: '', type: '', intensite: ''}],
            relations: [{nom: '', nature: '', resonnance: []}],
            hiver: '',
            printemps: '',
            ete: '',
            automne: '',
            devotion: '',
            talisman: '',
            liturgie: '',
            sortileges: [],
            materiel: [],
        }, {
            idSaison: 'spring',
            id: 1,
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: [{etat: '', type: '', intensite: ''}],
            relations: [{nom: '', nature: '', resonnance: []}],
            hiver: '',
            printemps: '',
            ete: '',
            automne: '',
            devotion: '',
            talisman: '',
            liturgie: '',
            sortileges: [],
            materiel: [],
        }, {
            idSaison: 'summer',
            id: 2,
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: [{etat: '', type: '', intensite: ''}],
            relations: [{nom: '', nature: '', resonnance: []}],
            hiver: '',
            printemps: '',
            ete: '',
            automne: '',
            devotion: '',
            talisman: '',
            liturgie: '',
            sortileges: [],
            materiel: [],
        }, {
            idSaison: 'autumn',
            id: 3,
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: [{etat: '', type: '', intensite: ''}],
            relations: [{nom: '', nature: '', resonnance: []}],
            hiver: '',
            printemps: '',
            ete: '',
            automne: '',
            devotion: '',
            talisman: '',
            liturgie: '',
            sortileges: [],
            materiel: [],
        }, {
            idSaison: 'time',
            id: 4,
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: [{etat: '', type: '', intensite: ''}],
            relations: [{nom: '', nature: '', resonnance: []}],
            hiver: '',
            printemps: '',
            ete: '',
            automne: '',
            devotion: '',
            talisman: '',
            liturgie: '',
            sortileges: [],
            materiel: [],
        }];
    static random = 'toto';

    static currentCharacterId: number;
    bob = CharactersComponent.currentCharacterId;

    constructor() {

    }


    ngOnInit(): void {

    }

}
