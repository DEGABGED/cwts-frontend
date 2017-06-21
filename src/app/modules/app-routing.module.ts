import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { BooksShowComponent } from '../components/books-show.component';
import { BooksIndexComponent } from '../components/books-index.component';
import { DashboardComponent } from '../components/dashboard.component';

const routes: Routes = [
  { path: 'books', component: BooksIndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'books/:id', component: BooksShowComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
