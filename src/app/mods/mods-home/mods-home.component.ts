import { Component, OnInit } from '@angular/core';

export class ItemModsModal {
  constructor(
    public title: string,
    public content: string
  ) { }
}


@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen: boolean = false;
  items: ItemModsModal[] = [
    new ItemModsModal('Why is the sky blue?', 'the sky is blue because it is'),
    new ItemModsModal('What does an orange taste like?', 'An orange taste like an orange'),
    new ItemModsModal('What color is the cat?', 'The cat is an orange color'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickModal() {
    this.modalOpen = !this.modalOpen;
  }
}
