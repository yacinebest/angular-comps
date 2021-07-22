import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '../views-home/views-home.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() items!: ItemModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
