// policy-search.module.ts or your module file
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PolicySearchComponent } from './policy-search.component';

const routes: Routes = [
  { path: '', component: PolicySearchComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicySearchRoutingModule {}
