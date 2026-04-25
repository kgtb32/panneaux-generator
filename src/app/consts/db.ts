import Dexie, { type EntityTable } from 'dexie';
import env from '../env/env';
import { SignEntity } from '../models/entity/sign';


const db = new Dexie(env.app.database.name) as Dexie & {
    signs: EntityTable<SignEntity, 'id'>;
};

db.version(1).stores({
    signs: '++id, saveName',
});

export { db };
