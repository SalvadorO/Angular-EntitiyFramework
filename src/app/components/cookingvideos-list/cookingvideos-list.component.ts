import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories.model';
import { Cookingvideo } from 'src/app/models/cookingvideo.model';
import { CookingvideosApiService } from 'src/app/services/cookingvideo.service';

@Component({
  selector: 'app-cookingvideos-list',
  templateUrl: './cookingvideos-list.component.html',
  styleUrls: ['./cookingvideos-list.component.css'],
})
export class CookingvideosListComponent implements OnInit {
  cookingVideoList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;
  categoryList: any = [];

  categoryMap: Map<number, string> = new Map();

  cookingvideos?: Cookingvideo[];

  currentVideo: Cookingvideo = {};
  currentCategory: Categories = {};
  currentIndex = -1;

  constructor(private service: CookingvideosApiService) {}

  ngOnInit(): void {
    this.getAllCookingVideos();

    this.refreshCategoryMap();
    this.cookingVideoList$ = this.service.getCookingVideosList();
    this.categoryList$ = this.service.getCategoriesList();
  }
  getAllCookingVideos(): void {
    this.service.getCookingVideosList().subscribe((response) => {
      this.cookingvideos = response;
    });

    this.service.getCategoriesList().subscribe((response) => {
      this.categoryList = response;
    });
  }

  getCategories(): void {
    this.service.getCategoriesList().subscribe((response) => {
      this.categoryList = response;
    });
  }

  refreshVideoList() {
    this.getAllCookingVideos();
    this.getCategories();
  }

  refreshCategoryMap() {
    this.service.getCategoriesList().subscribe((response) => {
      this.categoryList = response;
      for (let i = 0; i < response.length; i++) {
        this.categoryMap.set(
          this.categoryList[i].id,
          this.categoryList[i].categoryName
        );
      }
    });
  }

  setActiveVideo(cookingvideo: Cookingvideo, index: number) {
    this.currentVideo = cookingvideo;
    this.currentIndex = index;

    this.service.getcat(this.currentVideo.categoryId).subscribe((response) => {
      this.currentCategory = response;
    });
  }

  getActiveCategories() {
    this.categoryList$.subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].isActive === true) {
          // test = data[i].categoryName;
          // isActive = data[i].isActive;
        }
      }
    });
  }
}
