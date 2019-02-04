import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import {AngularFireModule} from '@angular/fire';

import { Ng7MaterialModule } from './modules/ng7-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CourseComponent} from "./course/course.component";
import { LoginComponent } from './login/login.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { CourseResolver } from './services/course.resolver';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CourseComponent,
    LoginComponent,
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    Ng7MaterialModule
  ],
  providers: [
    CourseResolver,
    { provide: FirestoreSettingsToken, useValue: {} }],
  entryComponents: [    CourseDialogComponent  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
