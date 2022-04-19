import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingvideosListComponent } from './cookingvideos-list.component';

describe('CookingvideosListComponent', () => {
  let component: CookingvideosListComponent;
  let fixture: ComponentFixture<CookingvideosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingvideosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingvideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
