import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import "jquery";
declare var $: any;
import { MsAdalAngular6Service } from "microsoft-adal-angular6";

import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-admin-viewtimesheet",
  templateUrl: "./admin-viewtimesheet.component.html",
  styleUrls: ["./admin-viewtimesheet.component.css"]
})
export class AdminViewtimesheetComponent implements OnInit {
  view_data;
  constructor(
    private data: DataService,
    private adalSvc: MsAdalAngular6Service,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.adalSvc.userInfo === null) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.data.adminViewTimesheets().subscribe(data => {
      this.view_data = data;
      console.log(data);
      var th = this;
      $(document).ready(function() {
        $("#myTable").dataTable({
          responsive: true
        });
      });

      $("table").on("click", "td .fa.fa-minus-square", function(e) {
        e.preventDefault();
        //  var tableData = $(this)
        //    .closest("tr")
        //    .map(function() {
        //      return $(this).text();
        //    })
        //    .get();

        var $row = $(this).closest("tr"); // Find the row
        var $text = $row.find(".timesheet_id").text(); // Find the text

        console.log($text);
        $(this)
          .closest("tr")
          .remove();

        th.data.removeTimesheet($text).subscribe(data => {});
      });

      $(document).ready(function() {
        $("#myTable").on("mousedown.edit", "i.fa.fa-pencil-square", function(
          e
        ) {
          $(this)
            .removeClass()
            .addClass("fa  fa-floppy-o");
          var $row = $(this)
            .closest("tr")
            .off("mousedown");
          var $tds = $row
            .find("td")
            .not(":first")
            .not("td:eq(5)")
            .not("td:eq(6)")
            .not(":last");

          $.each($tds, function(i, el) {
            var txt = $(this).text();
            console.log("pensil", txt);
            $(this)
              .html("")
              .append("<input type='text' value=\"" + txt + '">');
          });
        });

        $("#myTable").on("mousedown.save", "i.fa.fa-floppy-o", function(e) {
          var edited_data = {};

          $(this)
            .removeClass()
            .addClass("fa fa-pencil-square");
          var $row = $(this).closest("tr");

          var $tds = $row
            .find("td")
            .not(":first")
            .not(":last");

          var $timesheet_id = $row.find("td");
          var timesheet_id = $timesheet_id[0].textContent;
          console.log($timesheet_id[0].textContent);

          $.each($tds, function(i, el) {
            var txt = $(this)
              .find("input")
              .val();
            edited_data[i] = txt;

            $(this).html(txt);
          });
          edited_data["timesheet_id"] = timesheet_id;
          console.log(edited_data);
          th.data.Edit_timesheets(edited_data).subscribe(data => {
            console.log(data);
          });
        });
      });
    });

     $(document).ready(function() {
       $("i.fa-minus-square").popover({ trigger: "hover" });
       $("i.fa-pencil-square").popover({ trigger: "hover" });
     });
  }
}
