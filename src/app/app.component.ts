import { Component, OnInit } from '@angular/core';

import { MongoService } from './mongo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-mongo-firebase';
  movies: any;
  constructor(private mongoService: MongoService) {}
  ngOnInit() {
    this.mongoService.GetMovies().subscribe((result) => {
      this.movies = result;
    });
  }
}
