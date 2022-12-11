import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from './movie-api.service';

@Component({
  selector: 'imdb-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private movieapiservice: MovieApiService) {}

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.valid, 'searchForm#');
    this.movieapiservice
      .getSearchMovie(this.searchForm.value)
      .subscribe((result) => {
        this.searchResult = result.results;
      });
  }

  bannerResult: any = [];
  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.banerData();
    this.trendingData();
  }

  banerData() {
    this.movieapiservice.bannerApiDataMovie().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.movieapiservice.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }
}
