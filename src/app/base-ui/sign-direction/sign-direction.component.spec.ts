import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDirectionComponent } from './sign-direction.component';

describe('SignDirectionComponent', () => {
  let component: SignDirectionComponent;
  let fixture: ComponentFixture<SignDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SignDirectionComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SignDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
