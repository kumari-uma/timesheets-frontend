import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import { DataService } from "../../data.service";


@Component({
  selector: "app-admin-info",
  templateUrl: "./admin-info.component.html",
  styleUrls: ["./admin-info.component.css"]
})
export class AdminInfoComponent implements OnInit {
  name;
  team;
  title;
  manager_id;
  manager;
  asset_type;
  emp_id;

  constructor( 
    public adalSvc: MsAdalAngular6Service,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getEmployees().subscribe(data => {
      console.log(data);
      this.emp_id = data[0].column_data;
      this.name = data[1].column_data;
      this.title = data[2].column_data;
      this.team = data[3].column_data;
      this.manager = data[4].column_data;
      this.manager_id = data[5].column_data;
      this.asset_type = data[6].column_data;

      console.log(data);
    });
  }
}
