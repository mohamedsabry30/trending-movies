import { MoviesService } from './../movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnDestroy, OnInit {
  imgPrifix: string = 'https://image.tmdb.org/t/p/w500';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  x: string = '';

  subMovie: any;
  subTv: any;
  subPerson: any;

  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this.subMovie = this._MoviesService.getTrending('movie').subscribe({
      next: (data: any) => {
        this.trendingMovies = data.results.slice(0, 10);
      },
    });

    this.subTv = this._MoviesService.getTrending('tv').subscribe({
      next: (data: any) => {
        this.trendingTv = data.results.slice(0, 10);
      },
    });

    this.subPerson = this._MoviesService.getTrending('person').subscribe({
      next: (data: any) => {
        this.trendingPeople = data.results.slice(0, 10);
      },
    });
  }

  ngOnDestroy(): void {
    this.subMovie.unsubscribe();
    this.subTv.unsubscribe();
    this.subPerson.unsubscribe();
  }
}
