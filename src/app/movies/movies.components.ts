import {Component} from "@angular/core";
import {Movie} from "../movie";
import {MoviesList} from "../movie.datasource";
import {MovieComponent} from "../movie/movie.component";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls:['movies.component.css']
})
export class MoviesComponents {
  title="Movie Name";
  movies=MoviesList;
  selectedMovie: Movie | any;
    onSelect(movie:Movie): void{
      this.selectedMovie=movie;
}

  protected readonly Movie = Movie;
}
