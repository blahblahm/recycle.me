import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponDetailsComponent } from './cupon-details.component';

describe('CuponDetailsComponent', () => {
  let component: CuponDetailsComponent;
  let fixture: ComponentFixture<CuponDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuponDetailsComponent]
    });
    fixture = TestBed.createComponent(CuponDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
