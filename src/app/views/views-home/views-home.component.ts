import { Component, OnInit } from '@angular/core';


export class StatModel {
  constructor(
    public value: number,
    public label: string
  ) { }
}

export class ItemModel {
  constructor(
    public image: string,
    public title: string,
    public description: string
  ) { }
}

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats: StatModel[] = [
    new StatModel(22, '# of Users'),
    new StatModel(900, 'Revenue'),
    new StatModel(50, 'Reviews')
  ];
  items: ItemModel[] = [
    new ItemModel(
      '/assets/images/couch.jpeg',
      'Couch',
      'This is a fantastic couch to sit on'
    ),
    new ItemModel(
      '/assets/images/dresser.jpeg',
      'Dresser',
      'This is a great dresser to put stuff in'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
