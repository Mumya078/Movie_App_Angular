import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../movie.service";

@Component({
  selector: 'cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit{

  id:number;
  results: any;

  constructor(
    private http:HttpClient,
    private router: ActivatedRoute,

  ) {
  }
  ngOnInit() {
    this.getdata()
  }


  fetchId(id:any) {
    const  apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;

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
