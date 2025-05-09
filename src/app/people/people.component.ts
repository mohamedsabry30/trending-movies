import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent implements OnInit, OnDestroy {
  stars: any[] = [];
  imgprefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe({
      next: (response) => {
        this.stars = response.results;
      },
    });
  }

  ngOnDestroy(): void {}
}
