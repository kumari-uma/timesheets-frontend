import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import * as $ from "jquery";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  registerproject = this.fb.group({
    PROJECTID: [""],
    PROJECTNAME: [""],
    MANAGER_EMP_ID: [""],
    STARTDATE: [""],
    ENDDATE: [""],
    BILLED_ASSETS: [""],
    BUDGET: [""]
  });

  ngOnInit() {}

  update_projects() {
    var rowdata = this.registerproject.value;

    console.log("data", rowdata);

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/project/project",
      data: rowdata,
      success: function(data) {
        console.log(data);
      },
      error: function(result) {
        console.log(result);
      }
    });
  }
}
