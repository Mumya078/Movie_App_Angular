import { Component } from '@angular/core';
import {MovieSearchService} from "../movie-search.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery:string='';
  searchResults:any[]=[];
  results:any;
  pagetitle:string="Search";

  constructor(private movieSearchService:MovieSearchService,
              private  http:HttpClient){
  }
  searchMovies() {
    if (this.searchQuery) {
      this.movieSearchService.searchMovies(this.searchQuery).subscribe(
        (response: any) => {
          this.searchResults = response.results;
          console.log(this.searchResults)
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }
}
