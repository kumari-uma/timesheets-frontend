import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators,
  FormGroup
} from "@angular/forms";

import { DataService } from "../../data.service"; 
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
    private router: Router,
    private data: DataService
  ) {}

  // registerproject: FormGroup;
  // prepare(){
  registerproject = this.fb.group({
    PROJECTNAME: ["", Validators.required],
    MANAGER_EMP_ID: ["", Validators.required],
    STARTDATE: ["", Validators.required],
    ENDDATE: ["", Validators.required],
    BILLED_ASSETS: ["", Validators.required],
    BUDGET: ["", Validators.required],
    PARTNER: ["", Validators.required],
    SALES: ["", Validators.required]
  });
  // }
  after_submit(){
  this.registerproject = this.fb.group({
    PROJECTNAME: ["", Validators.required],
    MANAGER_EMP_ID: ["", Validators.required],
    STARTDATE: ["", Validators.required],
    ENDDATE: ["", Validators.required],
    BILLED_ASSETS: ["", Validators.required],
    BUDGET: ["", Validators.required],
    PARTNER: ["", Validators.required],
    SALES: ["", Validators.required]
  });
  }

  ngOnInit() {}

  update_projects() {
    var rowdata = this.registerproject.value;

    console.log("data", rowdata);

    this.data.CreateNewProject(rowdata).subscribe(data => {
      // this.projectID_data = data;
      console.log(data);
    });
    this.after_submit();
  }
}
