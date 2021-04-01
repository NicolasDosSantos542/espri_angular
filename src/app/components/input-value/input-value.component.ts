import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {

  public iconePlus =  'assets/plus.png';

  @Input() value;
  isInEdition = false;
  str = '';
  islist: false;

  onClick(){
    this.isInEdition = true;
  }

  validate(){
    this.isInEdition = false;
    console.log(this.isInEdition);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
