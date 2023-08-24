import { Injectable } from '@angular/core';
import {Movie} from "./movie";
import {MoviesList} from "./movie.datasource";
import {findIndex, Observable, of} from "rxjs";
import {LoggingService} from "./logging.service";
import {HttpClient} from "@angular/common/http";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {AboutComponent} from "./movie-detail/about/about.component";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  id:number;
  results: any;
  private sharedObject:any={};
   movielist:any=[];
   private deleted:any={};
   idToDelete=this.sharedObject.id;
   rss:any;
  private apiMoviesUrl =''
  constructor(
    private loggingService:LoggingService,
    private http:HttpClient,
    private router: ActivatedRoute,
              ) { }
  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies')
    return this.http.get<Movie[]>(this.apiMoviesUrl)
  }

  setObject(obj:any){
    this.sharedObject=obj;
    this.movielist.push(this.sharedObject)
    console.log(this.movielist)
  }

  deleteObject(idToDelete: number) {
    this.movielist = this.movielist.filter((obj:any) => obj.id !== idToDelete);
    console.log(this.movielist)
  }

  updatedObject(){
    return this.movielist;
  }

  setResults(rs:any){
    this.rss=rs;
  }
  getResults(){
    return this.rss;
    console.log(this.rss);
  }

}
