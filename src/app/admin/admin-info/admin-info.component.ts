import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";

@Component({
  selector: "app-admin-info",
  templateUrl: "./admin-info.component.html",
  styleUrls: ["./admin-info.component.css"]
})
export class AdminInfoComponent implements OnInit {
  approval_dta;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adalSvc: MsAdalAngular6Service
    
  ) {}

  ngOnInit() {
    
  }
}
