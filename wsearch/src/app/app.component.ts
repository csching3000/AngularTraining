import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from "./page-list/page-list.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { WikipediaService } from './wikipedia.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PageListComponent, SearchBarComponent, NgIf]
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {

  }
  
  onTerm(term: string) {
    //console.log('I am the app and here is the term', term);
    //const results = this.wikipedia.search(term);
    //console.log(results);
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    })
  }


}
