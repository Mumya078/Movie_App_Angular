import {Component, OnInit} from "@angular/core";
import {Movie} from "../movie";
import {MoviesList} from "../movie.datasource";
import {MovieComponent} from "../movie/movie.component";
import {MovieService} from "../movie.service";
import {HttpClient} from "@angular/common/http";
import {HomeComponent} from "../home/home.component";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWVlNzIyMzI3ZjhjM2VkMmQzNDRhYWU5YTQ4YmFlMiIsInN1YiI6IjY0ZGNjNmYwYjc3ZDRiMTEzZmM1NDBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ja9JC2mHLD0_uXcdjzzcDFn--6C61B7VBjZx8UJWoQo'
  }
};

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls:['movies.component.scss']
})
export class MoviesComponents{
  title="Movie Name";
  movies:Movie[];
  selectedMovie: Movie | any;
  posts: | any;
  results: any;
  images:any[]=[];
  constructor(private movieService:MovieService,
              private http:HttpClient,
              ) {
    http.get('https://api.themoviedb.org/3/movie/popular?api_key=81ee722327f8c3ed2d344aae9a48bae2')
      .subscribe(response=>{
        this.results=response;
        this.posts=this.results.results;
        console.log(this.posts);
      })
  }


  getMovies():void{
    this.movieService.getMovies()
      .subscribe(movies=>{
        this.movies=movies;
      });
  }

    onSelect(movie:Movie): void{
      this.selectedMovie=movie;
}

  protected readonly Movie = Movie;
}
