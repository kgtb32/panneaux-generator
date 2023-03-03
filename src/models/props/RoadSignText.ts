import { Importance } from "../styles/Importance";

export interface RoadSignText{
    name: string;
    importance: Importance;
    pictograms?: string[];
}