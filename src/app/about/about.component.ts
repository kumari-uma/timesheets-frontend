import { Component, OnInit } from '@angular/core'; 
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import * as $ from "jquery";
import { DataService } from "../data.service";


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  name;
  team;
  title;
  manager_id;
  manager;
  asset_type;
  emp_id;

  constructor(
    private adalSvc: MsAdalAngular6Service,
    private data: DataService
  ) {
    console.log(this.adalSvc.userInfo.userName);
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      console.log(data)
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

  firstClick() {
    this.data.firstClick();
  }
  edit_data(){

  }
}
