import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'container';
  welcome_message :string = ""
  constructor(private router: Router) {
    this.listenCustomEvent()

  }
  public ngOnInit(): void {


  }
  listenCustomEvent() {
    window.addEventListener("premium_redirect", (dataReceived: any) => {
      const queryParams = { policy_no: dataReceived.detail.policy_no };  
      // Navigate to the desired URL with query parameters
      this.router.navigate(['/premium'], { queryParams: queryParams });

    })
    window.addEventListener("welcome_message", (dataReceived: any) => {
      this.welcome_message = dataReceived
    })
  }
}
