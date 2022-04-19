import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookingvideosApiService } from './services/cookingvideo.service';
import { AddCookingvideoComponent } from './components/add-cookingvideo/add-cookingvideo.component';
import { CookingvideosListComponent } from './components/cookingvideos-list/cookingvideos-list.component';
import { CookingvideoDetailsComponent } from './components/cookingvideo-details/cookingvideo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCookingvideoComponent,
    CookingvideosListComponent,
    CookingvideoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [CookingvideosApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
