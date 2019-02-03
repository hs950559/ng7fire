import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Course } from '../model/course';

firebase.initializeApp(environment.firebaseConfig);
const db = firebase.firestore();

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { 
    // Get collection
    db.collection('courses')
      .get()
      .then(snap => {
        const courses: Course[] = snap.docs.map(snap => {
            return <Course>{
              id: snap.id,
              ...snap.data()
            };
        });
        console.log(courses);
      });

    // Get single document  
    // db.doc('courses/IzRTbz6LXV4CmxRzYHv3')
    // .get()
    // .then(snap => {
    //   console.log(snap.data());
    // });
  }

  ngOnInit() {
  }

}
