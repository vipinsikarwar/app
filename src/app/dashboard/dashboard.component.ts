import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data: any = {};
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {schoolName: 'G.D' , board: 'Up', medium: 'Hindi', class: '12th'},
      {schoolName: 'DPS' , board: 'CBSE', medium: 'English', class: '12th'},
      {schoolName: 'st. Andrews' , board: 'CBSE', medium: 'English', class: '12th'}
    ]
  }

  public onStateChange(state: State) {
    this.gridState = state;
}

}
