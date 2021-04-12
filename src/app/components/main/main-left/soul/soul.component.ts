import {Component, Input, OnChanges, OnInit} from '@angular/core';

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

    constructor() {
    }

    ngOnInit(): void {
        this.soulArray = [
            {
                typeTitle: 'Essence',
                type: this.currentSeason.essence,
                typeScore: 'Harmonie'
            },
            {
                typeTitle: 'Anathème',
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
                typeScore: 'Anathème'
            }
        ];
    }

}
