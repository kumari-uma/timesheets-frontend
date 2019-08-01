import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import "jquery";
declare var $: any;
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
@Component({
  selector: "app-admin-approvetimesheet",
  templateUrl: "./admin-approvetimesheet.component.html",
  styleUrls: ["./admin-approvetimesheet.component.css"]
})
export class AdminApprovetimesheetComponent implements OnInit {
  approve_data;
  isapproved;
  constructor(
    private data: DataService,
    private adalSvc: MsAdalAngular6Service
  ) {}

  ngOnInit() {
    this.data.admingetapproval().subscribe(data => {
      this.approve_data = data;
      console.log(data);

      $(document).ready(function() {
        $("#myTable").dataTable({
          responsive: true
        });
      });
    });
  }
  addTags(event, j) {
    this.isapproved = event.target.value;
    console.log(event.target.value, j);
    var timesheetId = j.timesheetid;
    this.data.setapprovals(event.target.value, timesheetId,this.adalSvc.userInfo.userName).subscribe(data => {
      console.log(data);
    });
  }
}
