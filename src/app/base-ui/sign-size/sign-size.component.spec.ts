import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSizeComponent } from './sign-size.component';

describe('SignSizeComponent', () => {
  let component: SignSizeComponent;
  let fixture: ComponentFixture<SignSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SignSizeComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SignSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
