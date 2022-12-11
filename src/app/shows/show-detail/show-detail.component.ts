import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowApiService } from '../show-api.service';

@Component({
  selector: 'imdb-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  constructor(
    private showapiservice: ShowApiService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  getShowDetailResults: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getShow(getParamId);
  }

  getShow(id: any) {
    this.showapiservice.getShowDetails(id).subscribe((results) => {
      this.getShowDetailResults = results;
    });
  }
  onBack(): void {
    this.route.navigate(['/movie']);
  }
}
