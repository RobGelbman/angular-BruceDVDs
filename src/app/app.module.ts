import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { DvdIndexComponent } from './dvd-index/dvd-index.component';
import { AppComponent } from './app.component';
import { SessionService } from "./services/session.service";
import { DvdService } from "./services/dvd.service";



@NgModule({
  declarations: [
    AppComponent,
    DvdIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, DvdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
