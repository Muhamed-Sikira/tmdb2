import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShowApiService } from './show-api.service';

@Component({
  selector: 'imdb-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit {
  constructor(private showapiservice: ShowApiService) {}
  bannerResult: any = [];
  trendingShowResult: any = [];

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.valid, 'searchForm#');
    this.showapiservice
      .getSearchShow(this.searchForm.value)
      .subscribe((result) => {
        this.searchResult = result.results;
      });
  }

  ngOnInit(): void {
    this.banerData();
    this.trendingData();
  }

  banerData() {
    this.showapiservice.bannerApiDataShow().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.showapiservice.trendingShowApiData().subscribe((result) => {
      this.trendingShowResult = result.results;
    });
  }
}
