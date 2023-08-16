import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MoviesComponents} from "./movies/movies.components";
import { MovieComponent } from './movie/movie.component';
import {FormsModule} from "@angular/forms";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponents,
    MovieComponent,
    MovieDetailComponent,
    LoggingComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    TopbarComponent,
    SearchComponent,
    SliderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
