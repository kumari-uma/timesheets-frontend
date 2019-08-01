import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators
} from "@angular/forms";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import * as $ from "jquery";
import { DataService } from "../../data.service";
@Component({
  selector: "app-admin-info-edit",
  templateUrl: "./admin-info-edit.component.html",
  styleUrls: ["./admin-info-edit.component.css"]
})
export class AdminInfoEditComponent implements OnInit {
  name;
  team;
  title;
  manager_id;
  manager;
  asset_type;
  emp_id;
  rowdata = {};
  constructor(
    private fb: FormBuilder,
    public adalSvc: MsAdalAngular6Service,
    private data: DataService
  ) {
        this.data.getEmployees().subscribe(data => {
          this.emp_id = data[0].column_data;
          this.name = data[1].column_data;
          this.title = data[2].column_data;
          this.team = data[3].column_data;
          this.manager = data[4].column_data;
          this.manager_id = data[5].column_data;
          this.asset_type = data[6].column_data;
        });
  } 
  ngOnInit() {}

 
  update_emp_details() {
    this.rowdata["emp_id"] = this.emp_id;
    this.rowdata["name"] = this.name;
    this.rowdata["team"] = this.team;
    this.rowdata["title"] = this.title;
    this.rowdata["manager"] = this.manager;
    this.rowdata["manager_id"] = this.manager_id;
    this.rowdata["asset_type"] = this.asset_type;
    console.log("data", this.rowdata);
    this.data.update_emp_details(this.rowdata).subscribe(data => {
      console.log(data);
    });

       this.name = "";
       this.team = "";
       this.title = "";
       this.manager = "";
       this.manager_id = "";
       this.asset_type = "";
  

  }
}
