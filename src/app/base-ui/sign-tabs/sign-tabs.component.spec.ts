import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignTabsComponent } from './sign-tabs.component';

describe('SignTabsComponent', () => {
  let component: SignTabsComponent;
  let fixture: ComponentFixture<SignTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
