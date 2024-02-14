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
  public ngOnInit(): void {


  }
  listenCustomEvent() {
    window.addEventListener("current_time", (dataReceived: any) => {
      this.current_time = dataReceived.detail.message
      setTimeout(() => {
        this.current_time = "";
      }, 2000); 
    })

  }

}
