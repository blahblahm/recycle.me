import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIndexComponent } from './more-index.component';

describe('MoreIndexComponent', () => {
  let component: MoreIndexComponent;
  let fixture: ComponentFixture<MoreIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreIndexComponent]
    });
    fixture = TestBed.createComponent(MoreIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
