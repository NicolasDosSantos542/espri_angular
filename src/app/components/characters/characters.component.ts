import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    static character =
        {
            idSaison: '',
            id: '',
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: {choque: { type: '', intensite: ''},
                meurtri: { type: '', intensite: ''},
                brise: { type: '', intensite: ''},
            },
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
        };
    static emptyCharacter =
        {
            idSaison: '',
            id: '',
            nom: '',
            lignee: '',
            age: '',
            role: '',
            talents: [],
            atouts: [],
            defauts: [],
            harmonie: '',
            rupture: '',
            sante: {choque: { type: '', intensite: ''},
                meurtri: { type: '', intensite: ''},
                brise: { type: '', intensite: ''},
            },
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
        };

    constructor() {

    }


    ngOnInit(): void {

    }

}
