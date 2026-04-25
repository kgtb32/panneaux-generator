import { Sign } from './sign';

export type SignTabState = 'SAVED' | 'UNSAVED' | 'EXPORTED';

export interface SignTab {
    sign: Sign;
    state: SignTabState;
}
