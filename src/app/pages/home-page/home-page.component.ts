import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    seasonDescribe = [

        {
            name: 'hiver',
            id: 'winter',
            token: 'Token_Hiver_small.png',
            maxim: 'Par ce présent, deviens mon enfant. Par ce cadeau, deviens mon héraut. Par ce don, sois Gardien de ma Saison Porte en ton âme ma Voix et ma vision. Prodigue-les au Monde, soigne ses lésions.',
            keywords: [
                'Coordination ',
                'Eau ',
                'Humilité ',
                'Secret ',
                'Mouvement',
                'Opportunisme ',
                'Instinct ',
                'Vide ',
                'Persévérer ',
                'Adaptation'
            ],
            essence: 'Opportunisme',
            anatheme: 'Fierté',
        },
        {
            name: 'Printemps',
            id: 'spring',
            token: 'Token_Printemps_small.png',
            maxim: 'Par ce présent, deviens mon enfant. Par ce cadeau, ' +
                'deviens mon héraut. Par ce don, sois Gardien de ma Saison Porte en ton âme ma Voix et ma sapience.' +
                ' Prodigue-les au Monde, relance sa danse.',
            keywords: [
                'Pacifisme ',
                'Sens ',
                'Réflexion ',
                'Rythme ',
                'Candeur',
                'Vent ',
                'Curiosité ',
                'Vérité ',
                'Tromper ',
                'Subtilité',
            ],
            essence: 'Curiosité',
            anatheme: 'Force',
        },
        {
            name: 'été',
            id: 'summer',
            token: 'Token_Ete_small.png',
            maxim: 'Par ce présent, deviens mon enfant. Par ce cadeau, deviens mon héraut. Par ce don, sois Gardien de ma Saison Porte en ton âme ma Voix et ma ferveur. Prodigue-les au Monde, rends-lui sa saveur.',
            keywords: [' Vitesse', ' Lumière', ' Emotion', ' Feu', ' Empathie', ' Interaction ', ' Puissance ', ' Passion ', ' Beau ', ' Sacrifice'],
            essence: 'Emotion',
            anatheme: 'Facilité'

        },
        {
            name: 'Automne',
            id: 'autumn',
            token: 'Token_Automne_small.png',
            maxim: 'Par ce présent, deviens mon enfant. Par ce cadeau, ' +
                'deviens mon héraut. Par ce don, sois Gardien de ma Saison Porte en ton âme ma Voix, mon savoir-faire.' +
                ' Prodigue-les au Monde, reforge son fer.',
            keywords: [
                'Résistance',
                'Construire',
                'Acquis',
                'Préparer',
                'Patience',
                'Gravité',
                'Pragmatisme',
                'Arrêter',
                'Pierre',
                'Conception',
            ],
            essence: 'Prévoyance',
            anatheme: 'Versatilité',
        },
        {
            name: 'temps',
            id: 'time',
            token: 'Token_Temps_small.png',
            maxim: 'Dévote Prêtresse entendant notre Voix, ' +
                'Le Temps devient Symbole de ta Foi. Avec les Gardiens, ' +
                'forme une entente. De l’Harmonie des Saisons sera garante.' +
                ' Puissent ces serments sceller notre alliance.',
            keywords: [
                'Equilibre ',
                'Chaos ',
                'Ordre ',
                'Sagesse ',
                'Divination',
                'Inéluctable ',
                'Coopération ',
                'Maudire ',
                'Bénir ',
                'Dévotion'
            ],
            essence: 'Coopération',
            anatheme: 'Passivité',
        },
    ];

    objToSend = {};

    constructor() {
        this.objToSend = this.seasonDescribe[2];
    }

    ngOnInit(): void {
    }

    changeSeason(season) {
        this.objToSend = this.seasonDescribe.find(data => data.id === season);
    }
}

