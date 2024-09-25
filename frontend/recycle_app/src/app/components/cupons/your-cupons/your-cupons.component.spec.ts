import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCuponsComponent } from './your-cupons.component';

describe('YourCuponsComponent', () => {
  let component: YourCuponsComponent;
  let fixture: ComponentFixture<YourCuponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourCuponsComponent]
    });
    fixture = TestBed.createComponent(YourCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
