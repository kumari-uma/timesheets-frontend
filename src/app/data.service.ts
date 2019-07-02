import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { MsAdalAngular6Service } from "microsoft-adal-angular6";

@Injectable({
  providedIn: "root"
})
export class DataService {
  emp_id;
  constructor(
    private http: HttpClient,
    private adalSvc: MsAdalAngular6Service
  ) {
    this.emp_id = this.adalSvc.userInfo.userName;
  }
  firstClick() {
    return console.log("clicked");
  }
  getUsers() {
    return this.http.post("http://localhost:3000/employee/emp", {
      data: this.emp_id
    });
  }
  getTimesheets() {
    return this.http.post("http://localhost:3000/timesheet/timesheets", {
      data: this.emp_id
    });
  }

  getapproval() {
    return this.http.post("http://localhost:3000/timesheet/approve", {
      data: this.emp_id
    });
  }
  setapprovals(aa = "", pp = "") {
    return this.http.post("http://localhost:3000/timesheet/approval", {
      data: { aa, pp }
    });
  }

  getProjects() {
    return this.http.get("http://localhost:3000/project/project");
  }

  admingetapproval() {
    return this.http.get("http://localhost:3000/admin/approve_timesheets");
  }
  adminViewTimesheets() {
    return this.http.get("http://localhost:3000/admin/view_timesheets");
  }
}
