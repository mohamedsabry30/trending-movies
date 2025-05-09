import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeheader',
  standalone: false,
  templateUrl: './homeheader.component.html',
  styleUrl: './homeheader.component.scss',
})
export class HomeheaderComponent implements OnChanges {
  imgPrifix: string = 'https://image.tmdb.org/t/p/w500';

  customOptions: OwlOptions = {
    loop: true,
    margin: 8,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 6,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };

  @Input() trendingMovies: any[] = [];

  @Input() title: string = '';
  ngOnChanges(changes: SimpleChanges): void {}
}
