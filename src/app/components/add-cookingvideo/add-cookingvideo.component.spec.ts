import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCookingvideoComponent } from './add-cookingvideo.component';

describe('AddCookingvideoComponent', () => {
  let component: AddCookingvideoComponent;
  let fixture: ComponentFixture<AddCookingvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCookingvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCookingvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
