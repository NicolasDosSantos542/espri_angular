import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-soul',
    templateUrl: './soul.component.html',
    styleUrls: ['./soul.component.css']
})
export class SoulComponent implements OnInit, OnChanges{
    @Input() seasonDescribe;
    soulArray =[
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
        console.log(this.seasonDescribe);
        this.soulArray = [
            {
                typeTitle: 'essence',
                type: this.seasonDescribe.essence,
                typeScore: 'harmonie'
            },
            {
                typeTitle: 'anatheme',
                type: this.seasonDescribe.anatheme,
                typeScore: 'Anathème'
            }
        ];
    }

    ngOnChanges(){
        this.soulArray = [
            {
                typeTitle: 'essence',
                type: this.seasonDescribe.essence,
                typeScore: 'harmonie'
            },
            {
                typeTitle: 'anatheme',
                type: this.seasonDescribe.anatheme,
                typeScore: 'Anathème'
            }
        ];
    }

}
