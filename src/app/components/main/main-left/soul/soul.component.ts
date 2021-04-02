import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soul',
  templateUrl: './soul.component.html',
  styleUrls: ['./soul.component.css']
})
export class SoulComponent implements OnInit {
  soulArray = [
    { typeTitle: 'essence',
    type: 'Prévoyance',
    typeScore: 'harmonie'},
    { typeTitle: 'anathème',
      type: 'Versatilité',
      typeScore: 'Anathème'}
  ];

  constructor() { }

  onClick(value) {
    console.log(value);
  }
  ngOnInit(): void {
  }

}
