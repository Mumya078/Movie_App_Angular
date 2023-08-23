import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {MoviesComponents} from "./movies/movies.components";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {SearchComponent} from "./search/search.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full',data:{title:'Home'}},
  {path:'movies',component:MoviesComponents},
  {path:'detail/:id',component:MovieDetailComponent,data:{title:'Detail'}},
  {path:'search',component:SearchComponent,data:{title:'Search'}},
  {path:'home',component:HomeComponent,data:{title:'Home'}},
  {path:'watchlist',component:WatchlistComponent,data:{title:'Watchlist'}}

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
