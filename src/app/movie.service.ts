import { Injectable } from '@angular/core';
import {Movie} from "./movie";
import {MoviesList} from "./movie.datasource";
import {Observable, of} from "rxjs";
import {LoggingService} from "./logging.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  posts: | any;
  id:number;
  results: any;


  private apiMoviesUrl =''
  constructor(
    private loggingService:LoggingService,
    private httpClient:HttpClient,
              ) { }



  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies')
    return this.httpClient.get<Movie[]>(this.apiMoviesUrl)
  }

  changeGetUpData(event:any){
    const value = event.target.getAttribute('data-value');
    const  apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/${value}?api_key=${apiKey}`;

    this.httpClient.get(url)
      .subscribe(response => {
        this.results = response;
        this.posts = this.results.results;
        console.log(this.posts);
      });
  }

  getDatas(id:number){
    const  apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/${id}=${apiKey}`;

    this.httpClient.get(url)
      .subscribe(response => {
        this.results = response;
        this.posts = this.results.results;
        console.log(this.results);
      });

  }
}
