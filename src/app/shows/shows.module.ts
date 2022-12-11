import { NgModule } from '@angular/core';
import { ShowListComponent } from './show-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowApiService } from './show-api.service';
import { ShowRouterModule } from './shows-routing.module';
import { ShowDetailComponent } from './show-detail/show-detail.component';

@NgModule({
  declarations: [ShowListComponent, ShowDetailComponent],
  imports: [
    ShowRouterModule, 
    ReactiveFormsModule, 
    CommonModule, 
    FormsModule
  ],
  providers: [ShowApiService],
})
export class ShowsModule {}
