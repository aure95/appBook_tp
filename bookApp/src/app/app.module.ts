import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {BookService} from './services/book.service';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { BookComponent } from './book/book.component';

import { MenuComponent } from './menu/menu.component';

const appRoutes:Routes=[
  {path: '', component: BookComponent },
  {path:'books',component:BookComponent },
  {path:'authors',component:BookComponent }];




@NgModule({
  declarations: [
    AppComponent,
    DetailBookComponent,
    BookComponent,
    MenuComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
