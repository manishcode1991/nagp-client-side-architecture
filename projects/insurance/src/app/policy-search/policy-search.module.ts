import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolicySearchComponent } from './policy-search.component';
import { PolicySearchRoutingModule } from './policy-search.routing-module';



@NgModule({
  declarations: [PolicySearchComponent],
  imports: [
      CommonModule,
      FormsModule,
      PolicySearchRoutingModule
  ],
  exports:[PolicySearchComponent],
  bootstrap: [PolicySearchComponent]
})
export class PolicySearchModule {
  public static component = PolicySearchComponent;
}
