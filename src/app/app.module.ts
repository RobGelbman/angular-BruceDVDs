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
import { CommentService } from "./services/comment.service";
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { IndividualCommentComponent } from './individual-comment/individual-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    DvdIndexComponent,
    DvdDetailComponent,
    CommentFormComponent,
    HomeComponent,
    LoginSignupComponent,
    IndividualCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, DvdService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
