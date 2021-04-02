import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  fakeArray = new Array(12);
  constructor() { }

  ngOnInit(): void {
  }

}
