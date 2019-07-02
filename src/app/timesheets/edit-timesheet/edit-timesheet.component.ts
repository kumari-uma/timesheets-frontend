import { Component, OnInit } from '@angular/core';
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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adalSvc: MsAdalAngular6Service
  ) {}
  registerTimesheet = this.fb.group({
    timesheet_id: [""],
    project_id: [""],
    emp_id: [""],
    bill_date: [""],
    task_type: [""],
    billed_hours: [""],
    approved1: ["N"],
    task_description: [""],

    app_emp: [""]
  });
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
  update_timesheets() {
    var rowdata = this.registerTimesheet.value;

    console.log("data", rowdata);
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/timesheet/timesheet",
      data: rowdata,
      success: function(data) {
        console.log(data);
      },
      error: function(result) {
        console.log(result);
      }
    });
  }

  ngOnInit() {}
}
