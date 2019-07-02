import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
     this.admininfo();
  }
 admininfo() {
    this.router.navigate(["admin_info"], { relativeTo: this.route });
  }

  update_projects() {
    this.router.navigate(["projects"], { relativeTo: this.route });
  }
  view_projects() {
    this.router.navigate(["view_projects"], { relativeTo: this.route });
  }
  view() {
    this.router.navigate(["view_timesheets"], { relativeTo: this.route });
  }
  edit() {
    this.router.navigate(["create_timesheets"], { relativeTo: this.route });
  }
  approve() {
    this.router.navigate(["approve_timesheets"], { relativeTo: this.route });
  }
}
