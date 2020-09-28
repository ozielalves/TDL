import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { TodoMakerComponent } from './home/components/todo-maker/todo-maker.component';
import { TodoListComponent } from './home/components/todo-list/todo-list.component';
import { TodoComponent } from './home/components/todo/todo.component';
import { LogoWrapperComponent } from './intro/components/logo-wrapper/logo-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
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
