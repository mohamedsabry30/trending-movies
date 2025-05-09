import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.scss',
})
export class MoviedetailsComponent implements OnInit {
  id: string = '';
  type: string = '';
  details: any = {};
  imgPrifix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {
      this.type = params['media'];
      this.id = params['id'];
    });

    this._MoviesService.getMovieDetails(this.id, this.type).subscribe({
      next: (response) => {
        this.details = response;
      },
    });
  }
}
