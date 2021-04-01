import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  public iconePlus =  'assets/plus.png';
  auClic = '(click)=\'clicSurBouton()\'';

  clicSurBouton(){

  }

      constructor() { }

  ngOnInit(): void {
  }

}
