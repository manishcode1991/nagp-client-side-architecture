import { Injectable } from '@angular/core';
import policy_data from './../policy_data.json'

@Injectable({
  providedIn: 'root'
})
export class PolicyLibService {
  constructor() {
    this.set('policies', policy_data);

  }

  log(message: string) {
    console.log(message)
  }
  get(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  getByPolicyNumber(policyNumber: any): any {
    const policies = this.get('policies') || [];
    console.log(policyNumber)
    return policies.find((policy: any) => policy.policy_number === policyNumber);
  }
}
