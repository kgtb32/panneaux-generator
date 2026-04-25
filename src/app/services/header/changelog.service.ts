import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from '../../env/env';
import { Changelog } from '../../models/changelog';
import { nanoid } from 'nanoid'

@Injectable({
  providedIn: 'root',
})
export class ChangelogService {
  private readonly baseUrl = env.app.isLocal ? '/' : env.app.baseStaticUrl;
  private readonly httpClient = inject(HttpClient);

  public getChangelog(): Observable<Changelog[]> {
    return this.httpClient.get<Changelog[]>(`${this.baseUrl}changelog.json?cacheId=${nanoid(12)}`);
  }
}
