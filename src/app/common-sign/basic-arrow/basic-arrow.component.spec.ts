import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicArrowComponent } from './basic-arrow.component';

describe('BasicArrowComponent', () => {
  let component: BasicArrowComponent;
  let fixture: ComponentFixture<BasicArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
