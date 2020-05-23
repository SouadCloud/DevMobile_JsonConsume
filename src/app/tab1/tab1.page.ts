import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  books : any = [];

  constructor(private http : HttpClient) {

    this.http.get("assets/books.json").subscribe (data=>{

      this.books = data;
      
    })
  }

}
