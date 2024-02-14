import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { PayModule } from './pay/pay.module';


export const routes: Routes = [
    { path: '', component: PayComponent },
    { path: ':policy_no', component: PayComponent },
  ];
    

  @NgModule({
    imports: [
      RouterModule.forRoot(routes),
      PayModule
      
    ],
    exports: [],
  })
  
  
  export class AppRoutingModule { }
