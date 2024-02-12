import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PolicyLibodule } from '../../../policy-lib/src/lib/policy-lib.modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    PolicyLibodule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule {
}


