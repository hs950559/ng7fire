import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {
  @Input()
  courses: Course[];

  @Output()
  courseEdited = new EventEmitter();
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  editCourse(course:Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = course;

    this.dialog.open(CourseDialogComponent, dialogConfig)
        .afterClosed()
        .subscribe(val => {
            if (val) {
                this.courseEdited.emit();
            }
        });

}
}