import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadIdentificationComponent } from './road-identification.component';

describe('RoadIdentificationComponent', () => {
  let component: RoadIdentificationComponent;
  let fixture: ComponentFixture<RoadIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadIdentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
