import { Component} from '@angular/core';
import { BookService } from '../services/book.service';
import {map} from 'rxjs/operators';

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

  public listInfoBook:<any>[]=[];
  public checkboxClicked:boolean=false;






  constructor(public bookService: BookService) {


  this.bookService.getBooks().pipe()
   .subscribe((res) =>{
     console.log(res);
     this.listInfoBook=res;});
  }

  checkboxClick()
  {
    //console.log("checkboxClicked");
    this.checkboxClicked=!this.checkboxClicked;
  }

}













}
