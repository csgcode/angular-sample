import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ContactComponent } from './contact/contact.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TempComponent } from './temp/temp.component';
import { ProserviceService } from './proservice.service';
import { FifilterComponent } from './fifilter/fifilter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    ContactComponent,
    MovieListComponent,
    TempComponent,
    FifilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
