import {Component, OnInit, Input} from '@angular/core';
import {TitleService} from "../title.service";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MovieService} from "../movie.service";
import {Location} from "@angular/common";

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  @Input() pageTitle: string;
  @Input() res:any;
  @Input() list:any;
  movieList:any=this.movieservice.movielist;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private movieservice:MovieService,
              private location:Location) {
  }
ngOnInit() {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.pageTitle = this.getPageTitle(this.activatedRoute);
    });
  console.log(this.movieList);
}
  private getPageTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'];
  }

  updateObject(){
    const newObj = this.res;
    this.movieservice.setObject(newObj);
  }

  popObject(id:number){
    this.movieservice.deleteObject(id);
}

control(id:number):boolean{
    for (const movie of this.movieList){
      if (movie.id===id){
        return true;
      }
    }
    return false;
  }
  goBack(){
    this.location.back();
  }

}
