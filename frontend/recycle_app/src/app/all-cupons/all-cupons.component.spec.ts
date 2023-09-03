import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCuponsComponent } from './all-cupons.component';

describe('AllCuponsComponent', () => {
  let component: AllCuponsComponent;
  let fixture: ComponentFixture<AllCuponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCuponsComponent]
    });
    fixture = TestBed.createComponent(AllCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
