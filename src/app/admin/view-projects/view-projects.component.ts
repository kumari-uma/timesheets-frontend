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
      let th = this;
      $(document).ready(function() {
        $("#myTable").dataTable({
          responsive: true
        });
      });

      

            $("table").on(
              "click",
              "td .fa.fa-minus-square",
              function(e) {
                e.preventDefault();
 

                var $row = $(this).closest("tr"); // Find the row
                var $text = $row.find(".project_id").text(); // Find the text

                console.log($text);
                $(this)
                  .closest("tr")
                  .remove();

                th.data
                  .removeProjects($text)
                  .subscribe(data => {});
              }
            );

      $(document).ready(function() {
        var table;

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
            var project_id = $project_id[0].textContent;
             console.log($project_id[0].textContent);

          $.each($tds, function(i, el) {
              
            var txt = $(this)
              .find("input")
              .val(); 
            edited_data[i]=(txt);
            
            $(this).html(txt);
          });  
          edited_data["project_id"]=project_id;
         
          th.data.EditProject(edited_data).subscribe(data => {
          
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
