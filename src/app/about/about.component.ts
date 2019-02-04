import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Course } from '../model/course';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  output;
  constructor(private db: AngularFirestore) { 
  }

  ngOnInit() {
  }

  async runTransaction() {
    const newCounter = await this.db.firestore.runTransaction(async transaction => {
      console.log('Runnig Transaction.....');
      const courseRef = this.db.doc('/courses/AntNnpolMeY08SiNXi0s').ref;

      const snap = await transaction.get(courseRef);
      const course = <Course>snap.data();
      const lessonsCount = course.lessonsCount + 1;
      transaction.update(courseRef, {lessonsCount});
      return lessonsCount;
    });
    this.output = newCounter;
    console.log('result lesson count ', newCounter);
  }

}
