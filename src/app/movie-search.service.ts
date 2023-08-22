import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  private apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
  private apiUrl = 'https://api.themoviedb.org/3/search/movie';
  constructor(
    private http:HttpClient,
  ) { }

  searchMovies(query:string){
    const params={
      api_key:this.apiKey,
      query:query
    }
    return this.http.get(this.apiUrl,{params});
  }
}
