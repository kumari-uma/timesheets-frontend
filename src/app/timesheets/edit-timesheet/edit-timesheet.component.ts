import { Component, OnInit } from '@angular/core';
import { AutocompleteLibModule } from "angular-ng-autocomplete";

import { DataService } from "../../data.service"; 
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import * as $ from "jquery";
@Component({
  selector: "app-edit-timesheet",
  templateUrl: "./edit-timesheet.component.html",
  styleUrls: ["./edit-timesheet.component.css"]
})
export class EditTimesheetComponent implements OnInit {
  clicked = "true";
  clicked1 = "true";
  month: any;
  day: any;
  year: any;
  projectID_data;
  id;
  project_selected_id;
  prjID='';

  constructor(
    private fb: FormBuilder,
    public adalSvc: MsAdalAngular6Service,
    private data: DataService
  ) {
    var currentTime = new Date();
    this.month = currentTime.getMonth() + 1;
    this.day = currentTime.getDate();
    this.year = currentTime.getFullYear();
  }

  registerTimesheet = this.fb.group({ 
    project_id: ["", Validators.required] ,
    bill_date: ["", Validators.required],
    task_type: ["", Validators.required],
    billed_hours: ["", Validators.required],
    
    task_description: ["", Validators.required],
 
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
getProjectID(pp){
  console.log(pp.target.value);
  for(let i=0;i<this.projectID_data.length;i++){
    

    if (this.projectID_data[i].PROJECTNAME == pp.target.value) {
      this.prjID=this.projectID_data[i].PROJECTID;
      break;
    }
  }
}

  update_timesheets() {
  
    var rowdata = this.registerTimesheet.value;
    let th = this;
      rowdata["project_id"] =this.prjID;
    rowdata["emp_id"]=this.adalSvc.userInfo.userName;
    rowdata["approved1"]="N";
    // $("input[id=projectID]").blur(function() {
    //   pp = $(this).val();
    //   console.log(pp);

    // });
 
    this.data.CreateNewTimesheet(rowdata).subscribe(data => {
      console.log(data);
    });

    console.log("data", rowdata);
    this.after_submit();
  }

  ngOnInit() {
    var pp: any;

    this.data.getprojectID().subscribe(data => {
      this.projectID_data = data;
      console.log(data);
    });
  }
}
