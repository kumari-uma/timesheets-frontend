import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataService } from "../../data.service";
var editor;
//  import * as $ from "jquery";
import "jquery";
// import * as dt from "datatables.net" ;
declare var $: any;
@Component({
  selector: "app-view-projects",
  templateUrl: "./view-projects.component.html",
  styleUrls: ["./view-projects.component.css"]
})
export class ViewProjectsComponent implements OnInit {
  public data1;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getProjects().subscribe(data => {
      this.data1 = data;
      console.log(data);

      $(document).ready(function() {
        $("#myTable").dataTable({
          responsive: true
        });
      });

      $(document).ready(function() {
        var table;

        $("#myTable").on("mousedown.edit", "i.fa.fa-pencil-square", function(
          e
        ) {
          $(this)
            .removeClass()
            .addClass("fa fa-envelope-o");
          var $row = $(this)
            .closest("tr")
            .off("mousedown");
          var $tds = $row
            .find("td")
            .not(":first")
            .not(":last");

          $.each($tds, function(i, el) {
            var txt = $(this).text();
            console.log("pensil", txt);
            $(this)
              .html("")
              .append("<input type='text' value=\"" + txt + '">');
          });
        });

        // $("#myTable").on("mousedown", "input", function(e) {
        //   e.stopPropagation();
        // });

        $("#myTable").on("mousedown.save", "i.fa.fa-envelope-o", function(e) {
          var edited_data = [];
          var i=0
          $(this)
            .removeClass()
            .addClass("fa fa-pencil-square");
          var $row = $(this).closest("tr");
          var $tds = $row
            .find("td")
            .not(":first")
            .not(":last");

          $.each($tds, function(i, el) {
            var txt = $(this)
              .find("input")
              .val();

            edited_data.push(i,txt);
                i++;
            $(this).html(txt);
          }); 
          $.ajax({
            type: "POST",
            url: "http://localhost:3000/project/project",
            data: JSON.stringify(edited_data),
            success: function(data) {
              console.log(data);
            },
            error: function(result) {
              console.log(result);
            }
          });
          console.log("save", edited_data[0][0]);
        });
      });
      // $("#myTable").on("mousedown", "#selectbasic", function(e) {
      //   e.stopPropagation();
      // });
    });
  }
}
