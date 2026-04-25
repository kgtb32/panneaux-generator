import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-zoom',
    templateUrl: './zoom.component.html',
    styleUrl: './zoom.component.scss',
    imports: [Button]
})
export class ZoomComponent {
  @Input()
  public zoom: number = 100;

  @Output()
  public readonly zoomChange = new EventEmitter();

  public zoomIn() {
    this.zoom += 10;
    this.zoomChange.next(this.zoom)
  }

  public zoomOut() {
    if (this.zoom > 10) {
      this.zoom -= 10
      this.zoomChange.next(this.zoom)
    }
  }
}
