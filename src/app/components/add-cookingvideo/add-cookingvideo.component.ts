import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookingvideo } from 'src/app/models/cookingvideo.model';
import { CookingvideosApiService } from 'src/app/services/cookingvideo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/models/categories.model';

@Component({
  selector: 'app-add-cookingvideo',
  templateUrl: './add-cookingvideo.component.html',
  styleUrls: ['./add-cookingvideo.component.css'],
})
export class AddCookingvideoComponent implements OnInit {
  cookingvideo: Cookingvideo = {
    title: '',
    isHidden: false,
  };
  categories: Categories = {
    id: '',
    categoryName: '',
  };
  categoryList$!: Observable<any[]>;

  submitted = false;

  constructor(
    private cookingvideoApiService: CookingvideosApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryList$ = this.cookingvideoApiService.getCategoriesList();
  }

  addNewCookingvideo(cookingvideo: any): Observable<any> {
    this.cookingvideo.id = 0;

    return this.cookingvideoApiService.addCookingVideo(cookingvideo);
  }

  //TODO:Add refresh on submit & Alert in html for successfully add

  saveNewCookingVideo(): void {
    const data = {
      title: this.cookingvideo.title,

      categoryId: this.categories.id,
    };

    this.addNewCookingvideo(data).subscribe(() => {
      this.submitted = true;
    });

    this.router.navigate(['/cookingvideos']);
  }
}
