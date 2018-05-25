import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { routes } from './app.routing';
import { DvdIndexComponent } from './dvd-index/dvd-index.component';
import { AppComponent } from './app.component';
import { SessionService } from "./services/session.service";
import { DvdService } from "./services/dvd.service";
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DvdIndexComponent,
    DvdDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, DvdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
