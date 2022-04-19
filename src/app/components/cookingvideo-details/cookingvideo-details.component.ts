import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CookingvideosApiService } from 'src/app/services/cookingvideo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cookingvideo } from 'src/app/models/cookingvideo.model';
import { Observable, Subject } from 'rxjs';
import { Categories } from 'src/app/models/categories.model';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cookingvideo-details',
  templateUrl: './cookingvideo-details.component.html',
  styleUrls: ['./cookingvideo-details.component.css'],
})
export class CookingvideoDetailsComponent implements OnInit {
  staticAlertClosed = false;

  successMessage = '';
  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;

  @Input() viewMode = false;
  @Input() currentVideo: Cookingvideo = {
    title: '',
  };
  @Input() currentCategory: Categories = {
    categoryName: '',
  };

  cookingVideoList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;
  categoryList: any = [];
  categoryMap: Map<number, string> = new Map();

  categories: Categories = {
    id: '',
    categoryName: '',
    isActive: true,
  };

  currentVideo$!: Observable<any[]>;

  constructor(
    private cookingVideoApiService: CookingvideosApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.getVideo(this.route.snapshot.params['id']);
      this.cookingVideoList$ =
        this.cookingVideoApiService.getCookingVideosList();
      this.categoryList$ = this.cookingVideoApiService.getCategoriesList();
    }
  }

  getVideo(id: string): void {
    this.cookingVideoApiService.get(id).subscribe((response) => {
      this.currentVideo = response;
    });
  }

  getCategory(id: string): void {
    this.cookingVideoApiService.getcat(id).subscribe((response) => {
      this.currentCategory = response;
    });
  }

  updateHidden(status: boolean): void {
    const data = {
      id: this.currentVideo.id,
      title: this.currentVideo.title,
      categoryId: this.currentVideo.categoryId,
      isHidden: status,
    };

    this.cookingVideoApiService
      .updateCookingVideo(this.currentVideo.id, data)
      .subscribe(() => {
        if ((this.currentVideo.isHidden = true)) {
          this.currentVideo.isHidden = false;
        } else this.currentVideo.isHidden = true;

        this.ngOnInit();
      });
  }

  updateCookingVideo() {
    const data = {
      id: this.currentVideo.id,
      categoryId: this.categories.id,
      title: this.currentVideo.title,
    };

    this.cookingVideoApiService
      .updateCookingVideo(this.currentVideo.id, data)
      .subscribe(() => {
        var showSuccessAlert = document.getElementById('update-success-alert');
        if (showSuccessAlert) {
          showSuccessAlert.style.display = 'block';
        }

        setTimeout(function () {
          if (showSuccessAlert) {
            showSuccessAlert.style.display = 'none';
          }
        }, 4000);
      });
  }

  deleteCookingVideo() {
    this.cookingVideoApiService
      .deleteCookingVideo(this.currentVideo.id)
      .subscribe(() => {
        this.router.navigate(['/cookingvideos']);
      });
  }

  refreshCategoryMap() {
    this.cookingVideoApiService.getCategoriesList().subscribe((response) => {
      this.categoryList = response;
      for (let i = 0; i < response.length; i++) {
        this.categoryMap.set(
          this.categoryList[i].id,
          this.categoryList[i].categoryName
        );
      }
    });
  }
}
