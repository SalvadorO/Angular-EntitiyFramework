import { TestBed } from '@angular/core/testing';

import { CookingvideosApiService } from './cookingvideo.service';

describe('CookingvideoService', () => {
  let service: CookingvideosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookingvideosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
