import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Course } from '../model/course';
import { of } from 'rxjs';

firebase.initializeApp(environment.firebaseConfig);
const db = firebase.firestore();

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private db: AngularFirestore) { 



    
  }

  ngOnInit() {
  }

  batchUpdate() {
    // Batch Update
    const c1 = this.db.doc(`courses/AntNnpolMeY08SiNXi0s`).ref;
    const c2 = this.db.doc(`courses/91dg8ZgunWInkORHd2yK`).ref;

    const batch = this.db.firestore.batch();
    batch.update(c1, {titles: {description: 'T1'}});
    batch.update(c2, {titles: {description: 'T2'}});

    batch.commit();
  }

}
