import { Arrow } from "../styles/Arrows";

import { RoadSignDescription } from "./RoadSignDescription";
import { RoadSignText } from "./RoadSignText";
import { RoadStyle } from "./RoadStyle";

export interface RoadSignPart{
    description: RoadSignDescription[];
    text: RoadSignText[];
    style?: RoadStyle;
    color?: RoadStyle;
    arrows?: Arrow;
}