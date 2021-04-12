import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    static characters =  [{
        idSaison: '',
        nom: '',
        lignee: '',
        age: '',
        role: '',
        talents: [],
        atouts: [],
        defauts: [],
        harmonie: '',
        rupture: '',
        sante: [{ etat: '', type: '', intensite: '' }],
        relations: [{ nom: '', nature: '', resonnance: [] }],
        hiver: '',
        printemps: '',
        ete: '',
        automne: '',
        devotion: '',
        talisman: '',
        liturgie: '',
        sortileges: [],
        materiel: []
    }];
    static random = 'toto';

    constructor() {

    }



    ngOnInit(): void {

    }

}
