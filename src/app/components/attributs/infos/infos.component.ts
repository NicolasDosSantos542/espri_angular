import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  // auClic = '(click)=\'clicSurBouton()\'';

  values = ['Lignée', 'Nom', 'Age'];

  constructor() { }

  ngOnInit(): void {
  }

}
