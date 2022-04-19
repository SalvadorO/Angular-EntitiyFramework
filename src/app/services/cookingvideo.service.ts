import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories.model';
import { Cookingvideo } from '../models/cookingvideo.model';

@Injectable({
  providedIn: 'root',
})
export class CookingvideosApiService {
  readonly cookingvideosAPIUrl = 'https://localhost:7095/api';

  constructor(private http: HttpClient) {}

  getCookingVideosList(): Observable<any[]> {
    return this.http.get<any>(this.cookingvideosAPIUrl + '/CookingVideos');
  }

  addCookingVideo(data: any) {
    return this.http.post(this.cookingvideosAPIUrl + '/CookingVideos', data);
  }

  updateCookingVideo(id: any, data: any) {
    return this.http.put(
      this.cookingvideosAPIUrl + `/CookingVideos/${id}`,
      data
    );
  }

  deleteCookingVideo(id: any) {
    return this.http.delete(this.cookingvideosAPIUrl + `/CookingVideos/${id}`);
  }

  get(id: any): Observable<Cookingvideo> {
    return this.http.get(this.cookingvideosAPIUrl + `/CookingVideos/${id}`);
  }

  //Categories

  getcat(id: any): Observable<Categories> {
    return this.http.get(this.cookingvideosAPIUrl + `/Categories/${id}`);
  }

  getCategoriesList(): Observable<any[]> {
    return this.http.get<any>(this.cookingvideosAPIUrl + '/Categories');
  }

  addCategories(data: any) {
    return this.http.post(this.cookingvideosAPIUrl + '/Categories', data);
  }

  updateCategories(id: any, data: any) {
    return this.http.put(this.cookingvideosAPIUrl + `/Categories/${id}`, data);
  }

  deleteCategories(id: any) {
    return this.http.delete(this.cookingvideosAPIUrl + `/Categories/${id}`);
  }
}
