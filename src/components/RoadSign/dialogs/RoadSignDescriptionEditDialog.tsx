import { ColorsType } from "../../../models/uikit/ColorsType";
import RoadSignDescriptionEditDialogProps from "../../../models/props/RoadSignDescriptionEditDialog";

import Button from "../../uikit/Button";
import Dialog from "../../uikit/Dialog";
import RoadSignDescriptionEdit from "../RoadSignDescriptionEdit";

import { FaCheck } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";
import { RoadSignDescription } from "../../../models/props/RoadSignDescription";

type RoadSignDescriptionOrUndef = RoadSignDescription | undefined;

export default function RoadSignDescriptionEditDialog(
  props: RoadSignDescriptionEditDialogProps
) {
  const [roadSignDescription, setRoadSignDescription] =
    useState<RoadSignDescriptionOrUndef>(props?.item);
  return (
    <Dialog {...props}>
      <RoadSignDescriptionEdit
        onChange={setRoadSignDescription}
        item={roadSignDescription}
      />
      <div className="d-flex justify-content-between pt-2">
        <Button color={ColorsType.NEGATIVE} className="align-center d-flex">
          <RiCloseCircleLine size={16} />
          <div className="mx-2" onClick={props.onClose}>
            Annuler
          </div>
        </Button>
        <Button
          className="align-center d-flex"
          onClick={() => {
            if (roadSignDescription) {
              props.callback(roadSignDescription, !!props.item);
              if (props.onClose) props?.onClose();
            }
          }}
        >
          <FaCheck size={16} />
          <div className="mx-2">Valider</div>
        </Button>
      </div>
    </Dialog>
  );
}
