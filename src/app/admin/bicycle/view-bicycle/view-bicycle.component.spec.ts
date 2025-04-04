import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBicycleComponent } from './view-bicycle.component';

describe('ViewBicycleComponent', () => {
  let component: ViewBicycleComponent;
  let fixture: ComponentFixture<ViewBicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBicycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
