import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ContactComponent } from './contact/contact.component';
import { TempComponent } from './temp/temp.component';
import { FifilterComponent } from './fifilter/fifilter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-list/:f', component: FifilterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'temp', component: TempComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
