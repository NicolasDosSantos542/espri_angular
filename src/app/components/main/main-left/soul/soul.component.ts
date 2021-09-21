import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CharactersComponent} from '../../../characters/characters.component';

@Component({
    selector: 'app-soul',
    templateUrl: './soul.component.html',
    styleUrls: ['./soul.component.css', '../main-left.component.css']
})
export class SoulComponent implements OnInit, OnChanges{
    @Input() currentSeason;
    soulArray = [
        {
            typeTitle: '',
            type: '',
            typeScore: ''
        },
        {
            typeTitle: '',
            type: '',
            typeScore: ''
        }
    ];
    bob = CharactersComponent.character.idSaison;

    constructor() {
    }

    ngOnInit(): void {
        this.soulArray = [
            {
                typeTitle: 'essence',
                type: this.currentSeason.essence,
                typeScore: 'Harmonie'
            },
            {
                typeTitle: 'anatheme',
                type: this.currentSeason.anatheme,
                typeScore: 'Rupture'
            }
        ];
    }

    ngOnChanges(){
        this.soulArray = [
            {
                typeTitle: 'essence',
                type: this.currentSeason.essence,
                typeScore: 'harmonie'
            },
            {
                typeTitle: 'anatheme',
                type: this.currentSeason.anatheme,
                typeScore: 'Rupture'
            }
        ];
    }

}
