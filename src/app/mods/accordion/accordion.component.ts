import { Component, Input, OnInit } from '@angular/core';
import { ItemModsModal } from '../mods-home/mods-home.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items!: ItemModsModal[];
  openedItemIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if (this.openedItemIndex === index)
      this.openedItemIndex = -1;
    else
      this.openedItemIndex = index;
  }

}
