import { RoadSignDescription as RoadSignDescriptionProps } from "../models/props/RoadSignDescription";

import SignStyles from "../styles/BaseSign";

export default function RoadSignDescription(
  roadSignDescription: RoadSignDescriptionProps
) {
  return (
    <div className="d-flex">
      <SignStyles.roadSignDescription.RoadSignDescription
        background={roadSignDescription.style.background}
        color={roadSignDescription.style.foreground}
        borderColor={roadSignDescription.style.border}
        className="text-bold w-fit-content"
      >
        {roadSignDescription.name}
      </SignStyles.roadSignDescription.RoadSignDescription>
      {roadSignDescription.isPaying && (
        <SignStyles.roadSignDescription.PayingSign className="my-auto">
          €
        </SignStyles.roadSignDescription.PayingSign>
      )}
    </div>
  );
}
