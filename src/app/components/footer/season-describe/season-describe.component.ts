import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-season-describe',
    templateUrl: './season-describe.component.html',
    styleUrls: ['./season-describe.component.css']
})
export class SeasonDescribeComponent implements OnInit {
    seasondescribe = [
        {
            name: 'été',
            id: 'summer',
            token: 'Token_Ete_small.png',
            maxim: 'Par ce présent, deviens mon enfant. Par ce cadeau, deviens mon héraut. Par ce don, sois Gardien de ma Saison Porte en ton âme ma Voix et ma ferveur. Prodigue-les au Monde, rends-lui sa saveur.',
            keywords: [' Vitesse', ' Lumière', ' Emotion', ' Feu', ' Empathie', ' Interaction ', ' Puissance ', ' Passion ', ' Beau ', ' Sacrifice'],
            color: '#ffd966',
            essence: 'Emotion',
            anatheme: 'Facilité'

        },
        {
            name: '',
            id: '',
            token: '',
            maxim: '',
            keywords: [],
            color: '',
            essence: '',
            anatheme: '',
        },
        {
            name: '',
            id: '',
            token: '',
            maxim: '',
            keywords: [],
            color: '',
            essence: '',
            anatheme: '',
        },        {
            name: '',
            id: '',
            token: '',
            maxim: '',
            keywords: [],
            color: '',
            essence: '',
            anatheme: '',
        },        {
            name: '',
            id: '',
            token: '',
            maxim: '',
            keywords: [],
            color: '',
            essence: '',
            anatheme: '',
        },
    ];

    constructor() {
    }

    ngOnInit()
        :
        void {
    }

}
