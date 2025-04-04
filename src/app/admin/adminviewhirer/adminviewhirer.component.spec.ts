import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewhirerComponent } from './adminviewhirer.component';

describe('AdminviewhirerComponent', () => {
  let component: AdminviewhirerComponent;
  let fixture: ComponentFixture<AdminviewhirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewhirerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewhirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
