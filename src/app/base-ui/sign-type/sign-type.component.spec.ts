import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignTypeComponent } from './sign-type.component';

describe('SignTypeComponent', () => {
  let component: SignTypeComponent;
  let fixture: ComponentFixture<SignTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
