import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-left',
    templateUrl: './main-left.component.html',
    styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
    @Input() currentSeason;
    constructor() {
    }

    ngOnInit(): void {
    }

}
