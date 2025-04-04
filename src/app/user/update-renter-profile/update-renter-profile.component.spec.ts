import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRenterProfileComponent } from './update-renter-profile.component';

describe('UpdateRenterProfileComponent', () => {
  let component: UpdateRenterProfileComponent;
  let fixture: ComponentFixture<UpdateRenterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRenterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
