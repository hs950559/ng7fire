import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../model/lesson';
import { CoursesService } from '../services/courses.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: Course;
  lessons: Lesson[];
  lastPageLoaded = 0;
  loading = false;

  displayedColumns: string[] = ['seqNo', 'description', 'duration'];
  constructor(private route: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    this.loading = true;
    this.courseService.findLessons(this.course.id)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(lessons => this.lessons = lessons);
  }

  loadMore() {
    this.lastPageLoaded++;
    this.loading = true;
    this.courseService.findLessons(this.course.id, 'asc', this.lastPageLoaded)
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(lessons => this.lessons = this.lessons.concat(lessons));
  }
}
