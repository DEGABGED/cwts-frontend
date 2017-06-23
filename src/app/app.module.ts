import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// User-defined modules
import { AppRoutingModule } from './modules/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { BooksShowComponent } from './components/books-show.component';
import { BooksIndexComponent } from './components/books-index.component';
import { DashboardComponent } from './components/dashboard.component';
import { BooksFormComponent } from './components/books-form.component';
import { BooksEditComponent } from './components/books-edit.component';
import { BooksBorrowComponent } from './components/books-borrow.component';

// Services
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksShowComponent,
    BooksIndexComponent,
    DashboardComponent,
    BooksFormComponent,
    BooksEditComponent,
    BooksBorrowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
