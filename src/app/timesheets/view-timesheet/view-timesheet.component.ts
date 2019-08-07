import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
declare var $: any;
import "jquery";
@Component({
  selector: "app-view-timesheet",
  templateUrl: "./view-timesheet.component.html",
  styleUrls: ["./view-timesheet.component.css"]
})
export class ViewTimesheetComponent implements OnInit {
  timesheet_data: any;
  projectid = {};
  projectID_data;
  create_time_data = {};
  Roles = [];
  prjID;
  constructor(
    private data: DataService,
    private adalSvc: MsAdalAngular6Service
  ) {}
  ngOnInit() {
    //this api is called to get the types of task in the timesheets
    this.data.getTask_types().subscribe(data => {
      for (var i in data) {
        this.Roles.push([data[i].types]);
        
      }
    });

    this.data.getprojectID().subscribe(data => {
      this.projectID_data = data;
      console.log(data);
    });

    this.data.getTimesheets().subscribe(data => {
      console.log(this.projectid);
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

    //api to get the ids of all the projects

    this.data.getprojectID().subscribe(data => {
      this.projectID_data = data;
      console.log(data);
    });
  }

  createTimesheet(event) {
    let that = this;

    const target = event.target;
    const project_name = target.querySelector("#defaultForm-project_name")
      .value;
    const bill_date = target.querySelector("#defaultForm-date").value;
    const task_type = target.querySelector("#defaultForm-task_type").value;
    const billed_hours = target.querySelector("#defaultForm-billed_hours")
      .value;
    const task_description = target.querySelector("#defaultForm-task_desc")
      .value;

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    this.create_time_data["project_id"] = project_name;
    this.create_time_data["bill_date"] = bill_date;
    this.create_time_data["task_type"] = task_type;
    this.create_time_data["billed_hours"] = billed_hours;
    this.create_time_data["task_description"] = task_description;
    this.create_time_data["emp_id"] = this.adalSvc.userInfo.userName;
    this.create_time_data["last_updated"] = date;
    console.log(this.create_time_data);
    // this.auth.getUserDetails(email, password).subscribe(data => {
    //   // console.log(data['information'][0].fullname)
    //   if (data.success) {
    //     localStorage.setItem("loggedInStatus", "true");
    //     this.auth.setLoggedIn(true, email, password);
    //     localStorage.setItem("fullname", data["information"][0].fullname);
    //     localStorage.setItem("email", data["information"][0].email);
    //     localStorage.setItem("number", data["information"][0].number);
    //     this.fullname = data["information"][0].fullname;
    //     console.log(localStorage);
    //     $("#myModal").modal("hide");
    //     this.removeloginbtn();
    //   } else {
    //     window.alert(data.message);
    //     console.log(data);
    //   }
    // });
  }

  submit_data() {
    this.data.CreateNewTimesheet(this.create_time_data).subscribe(data => {
      console.log(data);
    });
  }
  getProjectID(pp) {
    console.log(pp.target.value);
    for (let i = 0; i < this.projectID_data.length; i++) {
      if (this.projectID_data[i].PROJECTNAME == pp.target.value) {
        this.prjID = this.projectID_data[i].PROJECTID;
        break;
      }
    }
  }
}
