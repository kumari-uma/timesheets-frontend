import { Component, OnInit } from '@angular/core';
 import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import "jquery";
declare var $: any;
import {
  FormBuilder,
  Validators
} from "@angular/forms";
import { DataService } from "../../data.service"; 
@Component({
  selector: "app-admin-createtimesheet",
  templateUrl: "./admin-createtimesheet.component.html",
  styleUrls: ["./admin-createtimesheet.component.css"]
})
export class AdminCreatetimesheetComponent implements OnInit {
  projectID_data;
  prj_id;
  constructor(
    private fb: FormBuilder,
    public adalSvc: MsAdalAngular6Service,
    private data: DataService
  ) {}

  registerTimesheet = this.fb.group({
    project_id: ["", Validators.required],
    bill_date: ["", Validators.required],
    task_type: ["", Validators.required],
    billed_hours: ["", Validators.required],

    task_description: ["", Validators.required]
  });
  after_submit(){
      this.registerTimesheet = this.fb.group({
        project_id: ["", Validators.required],
        bill_date: ["", Validators.required],
        task_type: ["", Validators.required],
        billed_hours: ["", Validators.required],

        task_description: ["", Validators.required]
      });
  }
  Roles = [
    { role: "POC", value: "POC" },
    { role: "Testing", value: "Testing" },
    { role: "Talent Acquisition", value: "Talent Acquisition" },
    { role: "Sales", value: "Sales" },
    { role: "RFP", value: "RFP" },
    { role: "R&D", value: "R&D" },
    { role: "Organising External Event", value: "Organising External Event" },
    { role: "Marketing", value: "Marketing" },
    { role: "Management", value: "Management" },
    { role: "Infra Management", value: "Infra Management" },
    { role: "HR", value: "HR" },
    { role: "Finance", value: "Finance" },
    { role: "Documentation", value: "Documentation" },
    { role: "Development", value: "Development" },
    { role: "Attending External Event", value: "Attending External Event" }
  ];

  getprojectID(pp) {
    console.log(pp.target.value);
    for (let i = 0; i < this.projectID_data.length; i++) {
      if (this.projectID_data[i].PROJECTNAME == pp.target.value) {
        this.prj_id= this.projectID_data[i].PROJECTID;
        break;
      }
    }
  }

  update_timesheets() {
    var pp;
    var rowdata = this.registerTimesheet.value;
    rowdata["approved1"] = "N";
    let th = this;
    rowdata['emp_id']=this.adalSvc.userInfo.userName;
      rowdata["project_id"] = this.prj_id;
    this.data.CreateNewTimesheet(rowdata).subscribe(data => {
      console.log(data);
    });
    console.log("data", rowdata);
    this.after_submit();
  }

  ngOnInit() {
    this.data.getprojectID().subscribe(data => {
      this.projectID_data = data;
      console.log(data);
    });
  }
}
