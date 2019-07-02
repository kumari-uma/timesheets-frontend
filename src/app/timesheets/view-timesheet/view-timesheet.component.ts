import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service"; 
// import * as $ from "jquery";
 
declare var $:any;
import "jquery";
@Component({
  selector: "app-view-timesheet",
  templateUrl: "./view-timesheet.component.html",
  styleUrls: ["./view-timesheet.component.css"]
})
export class ViewTimesheetComponent implements OnInit {
  
  timesheet_data: any;
  constructor( 
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getTimesheets().subscribe(data => {
      this.timesheet_data = data;
       
       $(document).ready(function() {
        $("#myTable").dataTable({
              responsive: true

        })
      })
    })
  }
 
}
