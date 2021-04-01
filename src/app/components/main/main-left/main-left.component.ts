import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
    soulArray = {Essence : 'Prévoyance', Anatheme: 'Versatilité'};
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value) {
    console.log(value);
  }
}
