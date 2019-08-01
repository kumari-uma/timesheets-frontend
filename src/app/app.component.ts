import { Component } from "@angular/core";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private adalSvc: MsAdalAngular6Service,
 
    private router: Router
  ) {
    {
      var admin_data = [
        "hr@celebaltech.com",
        "anupam@celebaltech.com",
        "anirudh@celebaltech.com"  
      ];

      var token = this.adalSvc
        .acquireToken("https://graph.microsoft.com")
        .subscribe((token: string) => {
          for (let i = 0; i < admin_data.length; i++) {
            if (this.adalSvc.userInfo.userName == admin_data[i]) {
              console.log(this.adalSvc.userInfo.userName);
              this.router.navigate(["/admin"]);
            } else {
              this.router.navigate(["/header"]);
            }
          }
        });
    }
  }
}
