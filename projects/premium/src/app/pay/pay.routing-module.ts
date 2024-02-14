// policy-search.module.ts or your module file
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PayComponent } from './pay.component';

const routes: Routes = [
  { path: '', component: PayComponent },
  { path: ':policy_no', component: PayComponent },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule {}
