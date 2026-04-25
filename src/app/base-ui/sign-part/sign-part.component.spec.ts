import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPartComponent } from './sign-part.component';

describe('SignPartComponent', () => {
  let component: SignPartComponent;
  let fixture: ComponentFixture<SignPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SignPartComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SignPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
