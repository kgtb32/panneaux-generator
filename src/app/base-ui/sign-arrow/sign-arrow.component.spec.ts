import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignArrowComponent } from './sign-arrow.component';

describe('SignArrowComponent', () => {
  let component: SignArrowComponent;
  let fixture: ComponentFixture<SignArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SignArrowComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SignArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
