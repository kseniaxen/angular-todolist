import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './pages/to-do-items/to-do-items.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import { CountToDoItemsComponent } from './pages/count-to-do-items/count-to-do-items.component';

const routes: Routes = [
  { path: '', component: ToDoItemsComponent, },
  { path: 'about', component: AboutComponent },
  { path: 'count', component: CountToDoItemsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    AboutComponent,
    NotFoundComponent,
    CountToDoItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
