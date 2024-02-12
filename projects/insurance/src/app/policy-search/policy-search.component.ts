import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { PolicyLibService } from '../../../../policy-lib/src/public-api';

@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html',
  styleUrls: ['./policy-search.component.scss'],
})
export class PolicySearchComponent  {
  policyNumber: string = ''; 
  worker: any="";
  policyDetails: any;
   

  constructor(private policy_service:PolicyLibService,private router: Router ) {
  
  }
  public ngOnInit(): void {
    
    
  }
  onEnterKeyPressed(event: KeyboardEvent) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
      // Call your function here
      this.search();
    }
  }

  search(): void {
    this.policyDetails = this.policy_service.getByPolicyNumber(this.policyNumber);
  }
 
  public calculate_premium = () => { 
    const dataToSend = { policy_no: this.policyNumber };
    const custom_event = new CustomEvent("premium_redirect", { detail: dataToSend });
    window.dispatchEvent(custom_event)
  }
}
