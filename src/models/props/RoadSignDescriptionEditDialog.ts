import { Dialog } from "../uikit/Dialog";
import { RoadSignDescription } from "./RoadSignDescription";

export default interface RoadSignDescriptionEditDialog extends Dialog {
  callback: (obj: RoadSignDescription, isAdd: boolean) => void;
  item?: RoadSignDescription;
}
