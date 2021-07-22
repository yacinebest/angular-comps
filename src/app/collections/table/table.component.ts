import { Component, Input, OnInit } from '@angular/core';
import { DataModel, HeadersModel } from '../collections-home/collections-home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames: string = "";
  @Input() data: DataModel[] = [];
  @Input() headers: HeadersModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
