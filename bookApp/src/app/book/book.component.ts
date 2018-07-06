import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

 interface InfoBook{
    name:string;
    author:string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  public ListInfoBook:InfoBook[]=[];





  constructor(public bookService: BookService) {


   this.bookService.getBooks()
   .subscribe((res)=>{
     console.log(res);
     this.ListInfoBook=res;});
  }








  ngOnInit() {
  }




}
