import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewContactComponent } from './admin-view-contact.component';

describe('AdminViewContactComponent', () => {
  let component: AdminViewContactComponent;
  let fixture: ComponentFixture<AdminViewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
