import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'imdb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private movieapiservice: MovieApiService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  getMovieDetailResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.movieapiservice.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetailResult = result;
    });
  }
  onBack(): void {
    this.route.navigate(['/list']);
  }
}
