import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CharactersComponent} from '../characters/characters.component';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-input-value',
    templateUrl: './input-value.component.html',
    styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
    @Output() inputValueToEmit = new EventEmitter<string>();
    @Input() value: string;
    @Input() currentSeason: string;
    isInEdition = true;
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    str: string | { meurtri: { type: string; intensite: string }; brise: { type: string; intensite: string }; choque: { type: string; intensite: string } } | { resonnance: any[]; nature: string; nom: string }[];
    // @ts-ignore
    liveData = this.user.displayDatas(this.value);

    constructor(private user: UserService) {
    }

    ngOnInit(): void {
        this.liveData = this.user.displayDatas(this.value);
        this.str = this.user.displayDatas(this.value);
        // console.log(this.value + '  ' + this.str);
    }

    validate(str) {

        if (this.str !== '') {
            this.user.setData(this.value, str);
            this.isInEdition = this.isInEdition === false;
            this.liveData = this.user.displayDatas(this.value);

        }
    }

    onClick() {
        this.isInEdition = this.isInEdition === false;
    }


    textChanged() {
        this.str = this.user.displayDatas(this.value);


    }

}
