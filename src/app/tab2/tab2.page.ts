import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  books : any = [];

  constructor(private http : HttpClient) {

    this.http.get("assets/books.json").subscribe (data=>{

      this.books = data;
      
    })
  }
}
