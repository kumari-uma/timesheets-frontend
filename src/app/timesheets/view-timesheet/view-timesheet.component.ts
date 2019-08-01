import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

declare var $: any;
import "jquery";
@Component({
  selector: "app-view-timesheet",
  templateUrl: "./view-timesheet.component.html",
  styleUrls: ["./view-timesheet.component.css"]
})
export class ViewTimesheetComponent implements OnInit {
  timesheet_data: any;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getTimesheets().subscribe(data => {
      this.timesheet_data = data;
      var bind = this;
      $(document).ready(function() {
        $("#myTable").DataTable({
          responsive: true
        });
      });

      $("table").on("click", "td .fa.fa-trash", function(e) {
        e.preventDefault();

        var $row = $(this).closest("tr"); // Find the row
        var $text = $row.find(".timesheet_id").text(); // Find the text

        console.log($text);
        $(this)
          .closest("tr")
          .remove();

        bind.data.removeTimesheet($text).subscribe(data => {});
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

          var $project_id = $row.find("td");
          var timesheet_id = $project_id[0].textContent;
          console.log($project_id[0].textContent);

          $.each($tds, function(i, el) {
            var txt = $(this)
              .find("input")
              .val();
              
            $(this).html(txt);
            edited_data[i] = txt;

          });
          edited_data["timesheet_id"] = timesheet_id;
          console.log(edited_data);
          bind.data.Edit_timesheets(edited_data).subscribe(data => {
            console.log(data);
          });
        });
      });
    });
    $(document).ready(function() {
      $("i.fa-trash").popover({ trigger: "hover" });
      $("i.fa-pencil-square").popover({ trigger: "hover" });
    });
  }
}
