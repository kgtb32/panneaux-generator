import { RoadSignText as RoadSignTextProps } from "../models/props/RoadSignText";

import { nanoid } from "nanoid";
import SignStyles from "../styles/BaseSign";

export default function RoadSignText(roadSignTextProps: RoadSignTextProps) {
  const sizes: any = {
    LOW: "2em",
    NORMAL: "3em",
    HIGH: "3.5em",
    VERY_HIGH: "4em",
  };

  const textSizes: any = {
    LOW: "1em",
    NORMAL: "1.5em",
    HIGH: "1.75em",
    VERY_HIGH: "2em",
  };

  const currentSize = sizes[roadSignTextProps.importance.toString()] ?? "1em";
  const currentTextSize =
    textSizes[roadSignTextProps.importance.toString()] ?? "1em";

  return (
    <SignStyles.roadSignText.TextSign
      className="d-flex justify-content-center align-baseline"
      maxHeight={currentSize}
    >
      <div>
        {roadSignTextProps?.pictograms?.map((pictogram) => (
          <SignStyles.roadSignText.Pictogram
            src={`/${pictogram}`}
            alt=""
            className="w-auto"
            key={nanoid(128)}
            height={currentSize}
          />
        ))}
      </div>
      <SignStyles.roadSignText.TextPart
        className="m-0 my-auto text-bold"
        fontSize={currentTextSize}
      >
        {roadSignTextProps.name}
      </SignStyles.roadSignText.TextPart>
    </SignStyles.roadSignText.TextSign>
  );
}
