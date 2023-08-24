import {Component, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit{

  results:any;
  constructor(private movieService:MovieService) {
  }

  pagetitle:string="Watchlist";
  list:any=this.movieService.updatedObject()

  ngOnInit() {
    this.results=this.movieService.getResults();
    console.log(this.list);
  }

  popObject(id:number){
    this.movieService.deleteObject(id);
    this.movieService.updatedObject();
  }
}
