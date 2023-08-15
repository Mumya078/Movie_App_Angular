import { Injectable } from '@angular/core';
import {Movie} from "./movie";
import {MoviesList} from "./movie.datasource";
import {Observable, of} from "rxjs";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService:LoggingService) { }

  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies')
    return of(MoviesList)
  }
}
