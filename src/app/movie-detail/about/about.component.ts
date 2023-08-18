import {Component, Input, OnInit} from '@angular/core';
import { MovieService} from "../../movie.service";
import {MovieDetailComponent} from "../movie-detail.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  results:any;
  id:number;
  constructor(
    private http:HttpClient,
    public movieService:MovieService,
    private router: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.getdata();
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

  getdata(){
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.fetchId(id)
    });
  }
}

export function getAbout():any{
  return AboutComponent;
}
