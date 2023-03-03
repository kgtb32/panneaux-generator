import { SignSizes } from "../styles/SignSizes";
import { RoadSignPart } from "./RoadSignPart";

export interface RoadSign {
  size: SignSizes;
  parts: RoadSignPart[];
}
