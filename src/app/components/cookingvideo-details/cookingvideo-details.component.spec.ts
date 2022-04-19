import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingvideoDetailsComponent } from './cookingvideo-details.component';

describe('CookingvideoDetailsComponent', () => {
  let component: CookingvideoDetailsComponent;
  let fixture: ComponentFixture<CookingvideoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingvideoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingvideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
