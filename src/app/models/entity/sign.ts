import { Sign } from "../sign";

export interface SignEntity {
    sign: Sign;
    id: string;
    saveName: string;
    saveDate: Date;
    creationDate: Date;
    version: number;
}