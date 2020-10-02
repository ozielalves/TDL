import { TodosService } from './../todos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './intro/navbar/navbar.component';
import { TodoMakerComponent } from './home/todo-maker/todo-maker.component';
import { TodoListComponent } from './home/todo-list/todo-list.component';
import { TodoComponent } from './home/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    TodoMakerComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
