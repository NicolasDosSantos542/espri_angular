import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SaveService} from '../../services/save.service';
@Component({
  selector: 'app-season-choice',
  templateUrl: './season-choice.component.html',
  styleUrls: ['./season-choice.component.css']
})
export class SeasonChoiceComponent implements OnInit {
  @Input() seasonDescribe;
  @Output() seasonChoice = new EventEmitter<string>();


  constructor(private save: SaveService) { }

  ngOnInit(): void {
  }

  changeSeason(id) {
    this.seasonChoice.emit(id);
    this.save.changeSeason(id);

  }
}
