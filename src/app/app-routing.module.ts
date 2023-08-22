import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {MoviesComponents} from "./movies/movies.components";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {SearchComponent} from "./search/search.component";

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'movies',component:MoviesComponents},
  {path:'detail/:id',component:MovieDetailComponent},
  {path:'search',component:SearchComponent},
  {path:'home',component:HomeComponent}
]

@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
