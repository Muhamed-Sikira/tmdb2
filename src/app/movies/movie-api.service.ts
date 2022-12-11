import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  bannerApiDataMovie(): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/trending/movie/week?api_key=${environment.API_KEY}`
    );
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/trending/movie/day?api_key=${environment.API_KEY}`
    );
  }

  getSearchMovie(data: any): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/search/movie?api_key=${environment.API_KEY}&query=${data.movieName}`
    );
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/movie/${data}?api_key=${environment.API_KEY}`
    );
  }
}
