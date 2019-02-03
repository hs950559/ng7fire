import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng7MaterialModule } from './modules/ng7-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CourseComponent} from "./course/course.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CourseComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng7MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
