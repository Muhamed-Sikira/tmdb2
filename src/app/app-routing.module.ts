import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movie',
    loadChildren: () =>
      import('./movies/movie.module').then((mod) => mod.MovieModule),
  },
  {
    path: 'show',
    loadChildren: () =>
      import('./shows/shows.module').then((mod) => mod.ShowsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
