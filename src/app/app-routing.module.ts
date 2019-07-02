import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewTimesheetComponent } from "./timesheets/view-timesheet/view-timesheet.component";
import { AdminInfoComponent } from "./admin/admin-info/admin-info.component";
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { AppComponent } from './app.component';
import { EmployeeComponent } from "./employee/employee.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { TimesheetsComponent } from "./timesheets/timesheets.component";
import { EditTimesheetComponent } from "./timesheets/edit-timesheet/edit-timesheet.component";
import { AprrovalComponent } from "./timesheets/aprroval/aprroval.component";
import { ProjectsComponent } from "./Admin/projects/projects.component";
import { AdminComponent } from "./admin/admin.component";
import { ViewProjectsComponent } from "./Admin/view-projects/view-projects.component";
import { AdminViewtimesheetComponent } from "./admin/admin-viewtimesheet/admin-viewtimesheet.component";
import { AdminCreatetimesheetComponent } from "./admin/admin-createtimesheet/admin-createtimesheet.component";
 import { AdminApprovetimesheetComponent } from "./admin/admin-approvetimesheet/admin-approvetimesheet.component";


const routes: Routes = [
  {
    path: "header",
    component: HeaderComponent,

    children: [
      {
        path: "employee",
        component: EmployeeComponent
      },

      {
        path: "about",
        component: AboutComponent
      },
      { path: "view", component: ViewTimesheetComponent },
      { path: "edit", component: EditTimesheetComponent },
      { path: "approve", component: AprrovalComponent }
    ]
  },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "projects",
        component: ProjectsComponent
      },
      {
        path: "admin_info",
        component: AdminInfoComponent
      },
      {
        path: "view_projects",
        component: ViewProjectsComponent
      },
      {
        path: "view_timesheets",
        component: AdminViewtimesheetComponent
      },
      {
        path: "create_timesheets",
        component: AdminCreatetimesheetComponent
      },
      {
        path: "approve_timesheets",
        component: AdminApprovetimesheetComponent
      }
    ]
  },
  {
    path: "",
    component: AppComponent,
    pathMatch: "full",
    canActivate: [AuthenticationGuard]
  }
]; 
@NgModule({
    imports: [    
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {



   }
   export const routingComponents = [
            EmployeeComponent,
            LoginComponent,
            HeaderComponent,
            AboutComponent,
            TimesheetsComponent,
            ViewTimesheetComponent,
            EditTimesheetComponent,
            AprrovalComponent,
            ProjectsComponent,
            ViewProjectsComponent
          ];
