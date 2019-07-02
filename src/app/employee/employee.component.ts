import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators
} from "@angular/forms";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import * as $ from "jquery";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private adalSvc: MsAdalAngular6Service
  ) {
    console.log(this.adalSvc.userInfo.userName);
  }
  registerUser = this.fb.group({
    employee_id: [
      this.adalSvc.userInfo.userName,
      [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]
    ],
    name: ["", [Validators.required]],

    Title: ["", [Validators.required]],

    Team: ["", Validators.required],
    manager: ["", [Validators.required]],
    manager_id: ["", [Validators.required]],
    asset_type: ["", [Validators.required]]
  });
  ngOnInit() {
    
  }
 
  update_emp_details(){
var rowdata = this.registerUser.value;
    
 console.log("data",rowdata)
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/employee/employee",
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
