import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignArrowGroupComponent } from './sign-arrow-group.component';

describe('SignArrowGroupComponent', () => {
  let component: SignArrowGroupComponent;
  let fixture: ComponentFixture<SignArrowGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SignArrowGroupComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SignArrowGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
