import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Changelog } from '../../models/changelog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangelogService {
  private readonly httpClient = inject(HttpClient);

  public getChangelog(): Observable<Changelog[]> {
    return this.httpClient.get<Changelog[]>('/changelog.json');
  }
}
