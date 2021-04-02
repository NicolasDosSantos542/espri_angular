import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-saisons',
    templateUrl: './saisons.component.html',
    styleUrls: ['./saisons.component.css']
})
export class SaisonsComponent implements OnInit {
    seasonArray = [
        {
            name: 'hiver',
            id: 'winter',
            keywords: 'Coordination, Instinct, Mimer, Modifier, Mouvement, Profiter...',
            isOnLeft: true,
            score: 'X'
        }, {
            name: 'printemps',
            id: 'spring',
            keywords: 'Faux, Eviter, Pacifisme,\n' +
                '            Perception, Tromper, Vérité...',
            isOnLeft: false,
            score: 'X'
        }, {
            name: 'automne',
            id: 'autumn',
            keywords: 'Acquérir, Construire, Définir, Logique, Réparer, Protection...\n' +
                '\n',
            isOnLeft: true,
            score: 'X'
        }, {
            name: 'été',
            id: 'summer',
            keywords: 'Emotion, Force, Interaction,\n' +
                '            Rassembler, Sacrifice, Vitesse...',
            isOnLeft: false,
            score: 'X'
        }
    ];


    constructor() {
    }

    ngOnInit(): void {
    }

    onSeasonClick(season) {
        season.score = prompt('quel est votre score?');
        console.log(season.score);
        console.log(this.seasonArray[0]);
    }
}
