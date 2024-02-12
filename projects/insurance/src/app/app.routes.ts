import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PolicySearchComponent } from './policy-search/policy-search.component';
import { PolicySearchModule } from './policy-search/policy-search.module'


export const routes: Routes = [
  { path: '', component: PolicySearchComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PolicySearchModule
    
  ],
  exports: [],
})


export class AppRoutingModule { }
