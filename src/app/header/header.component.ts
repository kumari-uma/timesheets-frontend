import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import * as $ from "jquery";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.vendorinfo();
  }

  vendorinfo() {
    this.router.navigate(["about"], { relativeTo: this.route });
  }

  view() {
    this.router.navigate(["view"], { relativeTo: this.route });
  }
  edit() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
  approve() {
    this.router.navigate(["approve"], { relativeTo: this.route });
  }
  

  getUserDetails() {
    let that = this;
  }
}
