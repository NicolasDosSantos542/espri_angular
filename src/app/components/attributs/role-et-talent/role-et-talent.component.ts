import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-role-et-talent',
    templateUrl: './role-et-talent.component.html',
    styleUrls: ['./role-et-talent.component.css', '../attributs.component.css']
})
export class RoleEtTalentComponent implements OnInit {
    roleValues = ['role', 'talent'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
