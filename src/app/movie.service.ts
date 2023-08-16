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



  private apiMoviesUrl =''
  constructor(
    private loggingService:LoggingService,
    private httpClient:HttpClient,
              ) { }



  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies')
    return this.httpClient.get<Movie[]>(this.apiMoviesUrl)
  }


}
