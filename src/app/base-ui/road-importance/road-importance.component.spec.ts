import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadImportanceComponent } from './road-importance.component';

describe('RoadImportanceComponent', () => {
  let component: RoadImportanceComponent;
  let fixture: ComponentFixture<RoadImportanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadImportanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadImportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
