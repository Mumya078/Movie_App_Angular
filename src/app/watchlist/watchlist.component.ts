import {Component, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit{

  results=this.movieService.getResults();
  constructor(private movieService:MovieService) {
  }

  pagetitle:string="Watchlist";
  list:any=this.movieService.getList()

  ngOnInit() {
    console.log(this.list);
  }

  popObject(){
    this.movieService.deleteObject(this.results.id);
  }
}
