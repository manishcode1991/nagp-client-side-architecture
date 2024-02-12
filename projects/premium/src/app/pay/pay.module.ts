// policy-search.module.ts or your module file
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PayRoutingModule } from './pay.routing-module';
import {PayComponent} from './pay.component'



@NgModule({
  declarations: [PayComponent],
  imports: [
      CommonModule,
      FormsModule,
      PayRoutingModule
  ],
  exports:[PayComponent],
  bootstrap: [PayComponent]
})
export class PayModule {
  public static component = PayComponent;
}