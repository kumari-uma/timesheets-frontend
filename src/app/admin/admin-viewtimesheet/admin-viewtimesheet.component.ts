import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import "jquery";
declare var $: any;
@Component({
  selector: "app-admin-viewtimesheet",
  templateUrl: "./admin-viewtimesheet.component.html",
  styleUrls: ["./admin-viewtimesheet.component.css"]
})
export class AdminViewtimesheetComponent implements OnInit {
  view_data;
  constructor(private data: DataService) {}

  ngOnInit() {
    
    this.data.adminViewTimesheets().subscribe(data => {
      this.view_data = data;
      console.log(data);

      $(document).ready(function() {
        $("#myTable").dataTable({
          responsive: true
        });
      });
      
    });
    
  }
}
