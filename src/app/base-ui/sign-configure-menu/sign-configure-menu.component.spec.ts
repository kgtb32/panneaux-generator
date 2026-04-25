import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignConfigureMenuComponent } from './sign-configure-menu.component';

describe('SignConfigureMenuComponent', () => {
  let component: SignConfigureMenuComponent;
  let fixture: ComponentFixture<SignConfigureMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SignConfigureMenuComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SignConfigureMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
