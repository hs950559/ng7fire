import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
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

  constructor(private db: AngularFirestore) { 
    this.db.collection('courses')
      .snapshotChanges()
      .subscribe(snaps => {
        const courses: Course[] = snaps.map(snap => {
          return <Course>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          };
        }); 

        console.log(courses);
      });
  }

  ngOnInit() {
  }

}
