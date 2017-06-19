import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// User-defined modules

// Components
import { AppComponent } from './app.component';
import { BooksShowComponent } from './components/books-show.component';

// Services
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
