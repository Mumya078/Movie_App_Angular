import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../movie";

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  @Input()moviie:Movie

  constructor() {
  }

  ngOnInit(){

  }
}
