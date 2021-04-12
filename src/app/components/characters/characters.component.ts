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
    static currentSeasonId: string;

    static currentCharacter: object;

    constructor() {

    }

    ngOnInit(): void {

    }

}
