import {Component, Input, OnInit} from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {Movie} from "../movie";
import {MovieService} from "../movie.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  movies:Movie[];
  posts: | any;
  posts2: | any;
  results: any;
  images:any[]=[];
  currentSlideIndex: number = 0;
  x: number = 0;
  maxIterations: number = 5; // Döngünün en fazla kaç kez çalışacağını belirten değişken
  currentIteration: number = 0;
  constructor(private movieService:MovieService,
              private http:HttpClient,
  ) {
    http.get('https://api.themoviedb.org/3/movie/popular?api_key=81ee722327f8c3ed2d344aae9a48bae2')
      .subscribe(response=>{
        this.results=response;
        this.posts=this.results.results.slice(0,5);
        console.log(this.posts);
      })
  }

  ngOnInit() {
    if (this.currentIteration < this.maxIterations) {
      this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=81ee722327f8c3ed2d344aae9a48bae2')
        .subscribe(response => {
          this.results = response;
          this.posts2 = this.results.results.slice(0, 5);
          console.log(this.posts2);
          this.currentIteration++; // Her döngüde iterasyon sayısını arttır
        });
    }
  }

  getNumber(): number {
    this.x += 1; // x değerini her çağrıda 1 arttır
    console.log(this.x); // Artan x değerini konsola yazdır
    return this.x; // Güncellenen x değerini döndür
  }

}
