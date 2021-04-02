import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthArray = ['Choqué (-1)', 'Meurtri (-2', 'Brisé (-3)'];
  constructor() { }

  ngOnInit(): void {
  }


}
