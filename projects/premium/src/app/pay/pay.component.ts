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

  result = [];

  currentDateTime: string = "";

  constructor(private policy_service: PolicyLibService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    this.route.queryParams.subscribe(params => {
      this.policyNumber = params['policy_no']; 
      this.policyDetails = this.policy_service.getByPolicyNumber(this.policyNumber);
    });
  }

  private formatDigit(digit: number): string {
    return digit < 10 ? `0${digit}` : `${digit}`;
  }

  sendMessage= () => {

    const now = new Date();
    const hours = this.formatDigit(now.getHours());
    const minutes = this.formatDigit(now.getMinutes());
    const seconds = this.formatDigit(now.getSeconds());
    const milliseconds = now.getMilliseconds();
    const microseconds = Math.floor(performance.now() * 1000) % 1000;

    // Format the date and time as desired
    this.currentDateTime = `${now.toDateString()} ${hours}:${minutes}:${seconds}.${milliseconds}${microseconds}`;

    const dataToSend = { message: this.currentDateTime };
    const custom_event = new CustomEvent("current_time", { detail: dataToSend });
    window.dispatchEvent(custom_event)
  }
  

  genearatePrimeNumber = () => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./../prime-number.worker.ts', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        this.result = data
      };
      worker.postMessage(10000);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
