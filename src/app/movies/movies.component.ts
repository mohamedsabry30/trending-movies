import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit, OnDestroy {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  moviesResult: any[] = [];

  subGetTrending: any;

  constructor(private _MoviesServive: MoviesService) {}

  ngOnInit(): void {
    this.subGetTrending = this._MoviesServive.getTrending('movie').subscribe({
      next: (response) => {
        this.moviesResult = response.results;
      },
    });
  }

  overviewHandler(movie: any): string {
    if (movie.overview.split(' ').length > 25) {
      const x = movie.overview.split(' ').slice(0, 25);
      x.push('. . .');
      return x.join(' ');
    } else return movie.overview;
  }

  ngOnDestroy(): void {
    this.subGetTrending.unsubscribe();
  }
}
