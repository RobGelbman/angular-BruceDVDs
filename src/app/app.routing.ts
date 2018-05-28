import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DvdIndexComponent } from './dvd-index/dvd-index.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'dvd', component: DvdIndexComponent },
  { path: 'dvdDetail/:id', component: DvdDetailComponent },
  { path: 'comment', component: CommentFormComponent }
];