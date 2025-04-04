import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterBicycleRequestComponent } from './renter-bicycle-request.component';

describe('RenterBicycleRequestComponent', () => {
  let component: RenterBicycleRequestComponent;
  let fixture: ComponentFixture<RenterBicycleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterBicycleRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterBicycleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
