import {Component, OnInit, Input} from '@angular/core';
import {TitleService} from "../title.service";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MovieService} from "../movie.service";

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  @Input() pageTitle: string;
  @Input() results:any;
  movieList:any=this.movieservice.movielist;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private movieservice:MovieService) {
  }
ngOnInit() {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.pageTitle = this.getPageTitle(this.activatedRoute);
    });
}
  private getPageTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'];
  }

  updateObject(){
    const newObj = this.results;
    this.movieservice.setObject(newObj);
  }

  popObject(){
    this.movieservice.deleteObject(this.results.id);
}

}
