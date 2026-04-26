import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { filter, ReplaySubject } from 'rxjs';
import { AppEvent, EventType } from '../models/app-event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly eventLoop = new ReplaySubject<AppEvent>();

  private sendRawEvent(type: EventType, payload: object) {
    this.eventLoop.next({ type, payload, id: nanoid(12) });
  }

  submenuClicked(menu: string) {
    this.sendRawEvent('subMenuClicked', { menu });
  }

  get subMenuClicked() {
    return this.eventLoop.pipe(filter((e) => e.type === 'subMenuClicked'));
  }
}
