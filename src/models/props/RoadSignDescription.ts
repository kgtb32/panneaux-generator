import { RoadStyle } from "./RoadStyle";

export interface RoadSignDescription{
    name: string;
    style: RoadStyle;
    isPaying?: boolean;
}