import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {

  @ViewChild('myInput') myInputField: ElementRef;
  public iconePlus =  'assets/plus.png';

  @Input() value;
  isInEdition = false;
  str = '';

  onClick(){
    this.isInEdition = true;
    this.myInputField.nativeElement.focus();
    console.log(this.isInEdition);
  }

  validate(){
    this.isInEdition = false;
    console.log(this.isInEdition);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
