import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  AuthenticationGuard,
  MsAdalAngular6Module
} from "microsoft-adal-angular6";
import { FormsModule, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { EmployeeComponent } from "./employee/employee.component";
import { HeaderComponent } from "./header/header.component";

import { AboutComponent } from "./about/about.component";
import { HttpClientModule } from "@angular/common/http";
import { TimesheetsComponent } from "./timesheets/timesheets.component";
import { ViewTimesheetComponent } from "./timesheets/view-timesheet/view-timesheet.component";
import { EditTimesheetComponent } from "./timesheets/edit-timesheet/edit-timesheet.component";
import { AprrovalComponent } from "./timesheets/aprroval/aprroval.component";
import { AdminComponent } from "./admin/admin.component";
import { ProjectsComponent } from "./admin/projects/projects.component";
import { ViewProjectsComponent } from "./admin/view-projects/view-projects.component";
import { AdminInfoComponent } from "./admin/admin-info/admin-info.component";
import { AdminViewtimesheetComponent } from "./admin/admin-viewtimesheet/admin-viewtimesheet.component";
import { AdminCreatetimesheetComponent } from "./admin/admin-createtimesheet/admin-createtimesheet.component";
import { AdminApprovetimesheetComponent } from "./admin/admin-approvetimesheet/admin-approvetimesheet.component";
import { AdminInfoEditComponent } from "./admin/admin-info-edit/admin-info-edit.component";

import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    AboutComponent,
    TimesheetsComponent,
    ViewTimesheetComponent,
    EditTimesheetComponent,
    AprrovalComponent,
    AdminComponent,
    ProjectsComponent,
    ViewProjectsComponent,
    AdminInfoComponent,
    AdminViewtimesheetComponent,
    AdminCreatetimesheetComponent,
    AdminApprovetimesheetComponent,
    AdminInfoEditComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    ReactiveFormsModule,
    MsAdalAngular6Module.forRoot({
      tenant: "e4e34038-ea1f-4882-b6e8-ccd776459ca0",
      clientId: "1c4a7f67-c0ef-4b28-b7ba-ca624db636de",
      redirectUri: "https://celebaltimesheets.azurewebsites.net/",
      endpoints: {
        "https://login.microsoftonline.com/":
          "e4e34038-ea1f-4882-b6e8-ccd776459ca0/saml2"
      },
      navigateToLoginRequestUrl: false,

      cacheLocation: "localStorage"
    }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
