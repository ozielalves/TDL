import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home/components/home-navbar/home-navbar.component';
import { NavbarComponent } from './intro/components/navbar/navbar.component';
import { TodoMakerComponent } from './home/components/todo-maker/todo-maker.component';
import { TodoListComponent } from './home/components/todo-list/todo-list.component';
import { TodoComponent } from './home/components/todo/todo.component';
import { LogoWrapperComponent } from './intro/components/logo-wrapper/logo-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    NavbarComponent,
    TodoMakerComponent,
    TodoListComponent,
    TodoComponent,
    LogoWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
