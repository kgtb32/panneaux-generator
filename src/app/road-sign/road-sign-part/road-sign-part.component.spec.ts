import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignPartComponent } from './road-sign-part.component';

describe('RoadSignPartComponent', () => {
  let component: RoadSignPartComponent;
  let fixture: ComponentFixture<RoadSignPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadSignPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadSignPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
