import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShowApiService {
  constructor(private http: HttpClient) {}

  bannerApiDataShow(): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/trending/tv/week?api_key=${environment.API_KEY}`
    );
  }

  trendingShowApiData(): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/trending/tv/day?api_key=${environment.API_KEY}`
    );
  }

  getSearchShow(data: any): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/search/tv?api_key=${environment.API_KEY}&query=${data.movieName}`
    );
  }

  getShowDetails(data: any): Observable<any> {
    return this.http.get(
      `${environment.BASE_URL}/tv/${data}?api_key=${environment.API_KEY}`
    );
  }
}
