import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DvdIndexComponent } from './dvd-index/dvd-index.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: AppComponent },
  { path: 'dvd', component: DvdIndexComponent },
  { path: 'dvdDetail/:id', component: DvdDetailComponent }
];