import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
// import * as $ from "jquery";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";

declare var $: any;
import "jquery";
@Component({
  selector: "app-aprroval",
  templateUrl: "./aprroval.component.html",
  styleUrls: ["./aprroval.component.css"]
})
export class AprrovalComponent implements OnInit {
  pp;
  tax;
  isapproved;
  constructor(
    private data: DataService,
    public adalSvc: MsAdalAngular6Service
  ) {}

  ngOnInit() {
    this.data.getapproval().subscribe(data => {
      this.pp = data;
      $(document).ready(function() {
        $("#myTable").dataTable({
          responsive: true
        });
      });
      console.log(data);
    });
  }
  addTags(event, j) {
    this.isapproved = event.target.value;
    console.log(event.target.value, j);
    var timesheetId = j.timesheetid;
    this.data
      .setapprovals(
        event.target.value,
        timesheetId,
        this.adalSvc.userInfo.userName
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
