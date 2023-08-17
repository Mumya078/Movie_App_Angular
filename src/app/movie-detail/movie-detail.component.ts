import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../movie";
import {HomeComponent} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ParamMap} from "@angular/router";
import {MovieService} from "../movie.service";

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{

  @Input()moviie:Movie
  @Input()id:number;
  results: any;
  posts: | any;
  constructor(
    private http:HttpClient,
    private router: ActivatedRoute,
    public movieService:MovieService,

  ) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.fetchId(id)
    });
  }

  fetchId(id:any) {
    const  apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    this.http.get(url)
      .subscribe(response => {
        this.results = response;
        console.log(this.results);
      });
  }

  protected readonly screen = screen;
}

