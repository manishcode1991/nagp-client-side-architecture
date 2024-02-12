import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
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

   getByPolicyNumber(policyNumber: string): any {
    const policies = this.get('policies') || [];
    console.log(policies)
    return policies.find((policy: any) => policy.policy_number === policyNumber);
  }
}
