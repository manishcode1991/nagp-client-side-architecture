import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { WorkerServiceService } from './worker-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    // WorkerServiceService
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule {
}


