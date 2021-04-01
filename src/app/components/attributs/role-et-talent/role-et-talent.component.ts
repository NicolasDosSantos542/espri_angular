import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-role-et-talent',
    templateUrl: './role-et-talent.component.html',
    styleUrls: ['./role-et-talent.component.css']
})
export class RoleEtTalentComponent implements OnInit {
    roleValues = ['Rôle', 'Talent'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
