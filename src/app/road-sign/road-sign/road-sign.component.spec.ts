import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignComponent } from './road-sign.component';

describe('RoadSignComponent', () => {
  let component: RoadSignComponent;
  let fixture: ComponentFixture<RoadSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RoadSignComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(RoadSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
