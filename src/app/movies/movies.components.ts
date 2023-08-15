import {Component} from "@angular/core";
import {Movie} from "../movie";
import {MoviesList} from "../movie.datasource";
import {MovieComponent} from "../movie/movie.component";
import {MovieService} from "../movie.service";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls:['movies.component.scss']
})
export class MoviesComponents {
  title="Movie Name";
  movies:Movie[];
  selectedMovie: Movie | any;

  constructor(private movieService:MovieService) {
  }

  ngOnInit(): void{
    this.getMovies()
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
