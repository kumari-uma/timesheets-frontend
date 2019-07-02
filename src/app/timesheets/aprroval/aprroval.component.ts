import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import * as $ from "jquery";

@Component({
  selector: "app-aprroval",
  templateUrl: "./aprroval.component.html",
  styleUrls: ["./aprroval.component.css"]
})
export class AprrovalComponent implements OnInit {
  pp;
  tax;
  isapproved;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getapproval().subscribe(data => {
      this.pp = data;
      console.log(data); 
       
    });
  }
  addTags(event,j) { 
    this.isapproved = event.target.value;
    console.log(event.target.value,j); 
    var timesheetId = j.timesheetid;
       this.data.setapprovals(event.target.value,timesheetId).subscribe(data => {
          
         console.log(data);
       });
  }
}
