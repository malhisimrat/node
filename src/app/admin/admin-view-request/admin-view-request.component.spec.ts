import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRequestComponent } from './admin-view-request.component';

describe('AdminViewRequestComponent', () => {
  let component: AdminViewRequestComponent;
  let fixture: ComponentFixture<AdminViewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
