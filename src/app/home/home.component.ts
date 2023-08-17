import {Component, Input, OnInit, Output} from '@angular/core';
import {MovieService} from "../movie.service";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../movie";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWVlNzIyMzI3ZjhjM2VkMmQzNDRhYWU5YTQ4YmFlMiIsInN1YiI6IjY0ZGNjNmYwYjc3ZDRiMTEzZmM1NDBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ja9JC2mHLD0_uXcdjzzcDFn--6C61B7VBjZx8UJWoQo'
  }
};
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit{
  @Input() data1Value:any;
  movies:Movie[];
  posts: | any;
  id:number;
  results: any;
  constructor(public movieService:MovieService,
              private http:HttpClient,
  ) {
  }

  ngOnInit() {
    this.fetchUpcomingMovies()
  }


  fetchUpcomingMovies() {
    const  apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

    this.http.get(url)
      .subscribe(response => {
        this.results = response;
        this.posts = this.results.results;
        console.log(this.posts);
      });
  }

  changeGetUpData(event:any){
    const value = event.target.getAttribute('data-value');
    const  apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/${value}?api_key=${apiKey}`;

    this.http.get(url)
      .subscribe(response => {
        this.results = response;
        this.posts = this.results.results;
        console.log(this.posts);
      });
  }
  holdId(id:any){
    this.id=id;
  }


  protected readonly onclick = onclick;
}

