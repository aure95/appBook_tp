import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { BookComponent } from './book/book.component';
import {BookService} from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailBookComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
