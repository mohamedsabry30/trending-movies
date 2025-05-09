import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  standalone: false,
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss',
})
export class TvComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  tvShowsResult: any[] = [];

  constructor(private _MoviesService: MoviesService) {}

  overviewHandler(tv: any): string {
    if (tv.overview.split(' ').length > 30) {
      const x = tv.overview.split(' ').slice(0, 30);
      x.push('. . .');
      return x.join(' ');
    } else return tv.overview;
  }

  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe({
      next: (response) => {
        this.tvShowsResult = response.results;
      },
    });
  }
}
