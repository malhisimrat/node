import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewBicycleComponent } from './user-view-bicycle.component';

describe('UserViewBicycleComponent', () => {
  let component: UserViewBicycleComponent;
  let fixture: ComponentFixture<UserViewBicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewBicycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
