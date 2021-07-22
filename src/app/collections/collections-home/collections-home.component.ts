import { Component, OnInit } from '@angular/core';

export class DataModel {
  constructor(
    public name: string,
    public age: number,
    public job: string,
    public employed: boolean
  ) { }

  public getProp(prop: string): any {
    switch (prop) {
      case 'employed':
        return this.employed;
        break;
      case 'name':
        return this.name;
        break;
      case 'age':
        return this.age;
        break;
      case 'job':
        return this.job;
        break;
      default:
        throw new Error("Property Does Not Exist!");
    }
  }
}

export class HeadersModel {
  constructor(
    public key: string,
    public label: string
  ) { }
}

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: DataModel[] = [
    new DataModel('James', 24, 'Designer', true),
    new DataModel('Jill', 26, 'Engineer', false),
    new DataModel('Elyse', 25, 'Engineer', true)
  ];
  headers: HeadersModel[] = [
    new HeadersModel('employed', 'Has a Job?'),
    new HeadersModel('name', 'Name'),
    new HeadersModel('age', 'Age'),
    new HeadersModel('job', 'Job')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
