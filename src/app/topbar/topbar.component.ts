import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  paramValue:string;
  constructor(private route:ActivatedRoute) {
  }
ngOnInit() {
    this.route.params.subscribe(params=>
    {
      const paramValue= params['detail']
      this.paramValue=paramValue;
    })
}
}
