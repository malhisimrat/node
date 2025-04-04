import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewrenterComponent } from './adminviewrenter.component';

describe('AdminviewrenterComponent', () => {
  let component: AdminviewrenterComponent;
  let fixture: ComponentFixture<AdminviewrenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewrenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewrenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
