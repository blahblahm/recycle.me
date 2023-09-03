import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIndexComponent } from './profile-index.component';

describe('ProfileIndexComponent', () => {
  let component: ProfileIndexComponent;
  let fixture: ComponentFixture<ProfileIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileIndexComponent]
    });
    fixture = TestBed.createComponent(ProfileIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
