import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  current_time :string = ""
  constructor(private router: Router) {
    this.listenCustomEvent()

  }
  listenCustomEvent() {
    window.addEventListener("current_time", (dataReceived: any) => {
      this.current_time = dataReceived.detail.message
    })
  }

}
