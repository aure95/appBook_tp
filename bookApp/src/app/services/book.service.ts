import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string="http://localhost:5000/books;"

  constructor(public http:HttpClient) { }

  getBooks(){
      return this.http.get(this.url);
  }
}
