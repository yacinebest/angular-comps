import { Component, Input, OnInit } from '@angular/core';
import { StatModel } from '../views-home/views-home.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @Input() data!: StatModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
