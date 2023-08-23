import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private pageTitle: string;

  constructor(private title: Title) { }

}
