import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { db } from '../consts/db';
import { Sign } from '../models/sign';
import env from '../env/env';

@Injectable({
  providedIn: 'root',
})
export class SignService {
  public saveSign(
    sign: Sign,
    saveName: string,
    id?: string,
  ): Observable<string> {
    if (id === undefined) {
      // Cas de création
      const version = env.app.database.sign.dbVersion;
      const [saveDate, creationDate] = [new Date(), new Date()];
      return from(
        db.signs.add({ saveName, sign, id, saveDate, creationDate, version }),
      );
    } else {
      //cas de modification
      return from(
        db.signs
          .update(id!, { sign, saveName, saveDate: new Date() })
          .then((e) => id!),
      );
    }
  }
}
