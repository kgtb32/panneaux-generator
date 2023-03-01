import { nanoid } from "nanoid";

import { RoadSignPart as RoadSignPartProps } from "../models/props/RoadSignPart";
import { Arrow } from "../models/styles/Arrows";

import RoadSignDescription from "./RoadSignDescription";
import RoadSignText from "./RoadSignText";
import ArrowComponent from "./Arrow";

import Styles from "../styles/BaseSign";

export default function RoadSignPart(roadSignPartProps: RoadSignPartProps) {
  const generateArrow = () => (
    <ArrowComponent key={nanoid(128)} arrow={roadSignPartProps.arrows} />
  );

  const basNbItems: any = {
    BAS: 1,
    DEUX_BAS: 2,
    TROIS_BAS: 3,
  };

  const [isGauche, isDroite] = [
    roadSignPartProps.arrows === Arrow.GAUCHE ||
      roadSignPartProps.arrows === Arrow.DIRECTION_GAUCHE,

    roadSignPartProps.arrows === Arrow.DROITE ||
      roadSignPartProps.arrows === Arrow.DIRECTION_DROITE,
  ];

  return (
    <Styles.roadSignPart.Sign
      bg={roadSignPartProps?.color?.background}
      fg={roadSignPartProps?.color?.foreground}
      border={roadSignPartProps?.color?.border}
      className="flex-column"
    >
      <div className="d-flex align-baseline justify-space-evently">
        {roadSignPartProps.description.map((desc) => (
          <RoadSignDescription
            name={desc.name}
            style={desc.style}
            isPaying={desc?.isPaying ?? false}
            key={nanoid(128)}
          />
        ))}
      </div>
      <div className="d-flex align-center">
        {isDroite ? generateArrow() : <div />}
        <div className="w-100">
          {roadSignPartProps.text.map((description) => (
            <RoadSignText {...description} key={nanoid(128)} />
          ))}
        </div>
        {isGauche ? generateArrow() : <div />}
      </div>
      <div className="d-flex justify-space-evently">
        {Array(basNbItems[roadSignPartProps?.arrows ?? ""] ?? 0)
          .fill(0)
          .map(() => generateArrow())}
      </div>
    </Styles.roadSignPart.Sign>
  );
}
