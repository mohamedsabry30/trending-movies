import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}

  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/${mediaType}/popular?api_key=e9fd4554398c16f7bcfeebb8288d1ef9&language=en-US&page=1`
    );
  }

  getMovieDetails(id: string, type: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=e9fd4554398c16f7bcfeebb8288d1ef9`
    );
  }
}
