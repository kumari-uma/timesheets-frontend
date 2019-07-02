import { Component } from "@angular/core";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  ReactiveFormsModule
} from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  result = false;
  constructor(
    private adalSvc: MsAdalAngular6Service,

    private route: ActivatedRoute,
    private router: Router
  ) {
    {
      console.log(this.adalSvc.userInfo);
      
      var admin_data = [
        "hr@celebaltech.com",
        "anupam@celebaltech.com",
        "anirudh@celebaltech.com",
        "umakumari15898@gmail.com"
      ];
 


      var token = this.adalSvc
        .acquireToken("https://graph.microsoft.com")
        .subscribe((token: string) => {
          console.log(token);
 
          for (let i = 0; i < admin_data.length; i++) {
            if (this.adalSvc.userInfo.userName == admin_data[i]) {
              console.log(this.adalSvc.userInfo.userName);
                         this.router.navigate([
                           "/admin"
                         ]);
            } else {

                 this.router.navigate(["/header"]);
            }
          }
        });
    }
  }

  login() {
    this.router.navigate(["/header"]);
    this.result = true;
    console.log("login clicked");
  }
}
