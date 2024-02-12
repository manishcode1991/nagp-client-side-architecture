import { Component } from '@angular/core';
import { PolicyLibService } from '../../../../policy-lib/src/public-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.scss'
})
export class PayComponent {
  receivedData: any;
  policyNumber: string = '';

  policyDetails: any;

  constructor(private policy_service: PolicyLibService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.policyDetails = this.policy_service.getByPolicyNumber(paramMap.get('policy_no'));
    });

  }
}
