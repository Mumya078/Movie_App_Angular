import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../movie.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  results:any;
  id:number;
  text:string;
  fullText: string;
  displayedText: string;
  showEllipsis = false;

  constructor(
    private http:HttpClient,
    private router: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.getdata();
  }
  fetchId(id:any) {
    const apiKey = '81ee722327f8c3ed2d344aae9a48bae2';
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`;

    this.http.get(url)
      .subscribe(response => {
        this.results= response;
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
