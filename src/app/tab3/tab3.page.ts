import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  books : any = [];

  constructor(private http : HttpClient) {

    this.http.get("assets/books.json").subscribe (data=>{

      this.books = data;
      
    })
  }
  getItems(){

    return this.books.filter(book => book.categories == "Java");
  }
}
