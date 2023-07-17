import { RoadSignDescription } from "./RoadSignDescription";

export interface RoadSignDescriptionEdit {
  onChange: (signDescription: RoadSignDescription) => void;
  item?: RoadSignDescription;
}
