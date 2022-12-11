import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MoviesRoutingModule } from './movie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieApiService } from './movie-api.service';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [MovieApiService],
})
export class MovieModule {}
