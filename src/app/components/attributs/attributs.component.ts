import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attributs',
  templateUrl: './attributs.component.html',
  styleUrls: ['./attributs.component.css']
})
export class AttributsComponent implements OnInit {
    @Input() currentSeason: any;

  constructor() { }

  ngOnInit(): void {
  }

}
