import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public getTreeViewData = [];
  constructor(private _getDataService : GetDataService) { }

  ngOnInit() {
    this._getDataService.getData().subscribe(data => this.getTreeViewData = data);
  }

}
