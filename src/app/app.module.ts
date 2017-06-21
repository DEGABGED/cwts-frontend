import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// User-defined modules
import { AppRoutingModule } from './modules/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { BooksShowComponent } from './components/books-show.component';
import { BooksIndexComponent } from './components/books-index.component';
import { DashboardComponent } from './components/dashboard.component';

// Services
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksShowComponent,
    BooksIndexComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
