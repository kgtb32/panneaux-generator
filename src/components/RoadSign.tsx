import { nanoid } from "nanoid";
import React from "react";
import { RoadSign as RoadSignProp } from "../models/props/RoadSign";
import RoadSignPart from "./RoadSignPart";

export default function RoadSign(props: RoadSignProp) {
  const signSize: any = {
    BW2BH2: {
      height: "800px",
      width: "800px",
    },
    BW3BH2: {
      height: "800px",
      width: "1024px",
    },
    BW2BH1: {
      height: "400px",
      width: "800px",
    },
  };

  const currentSize = signSize[props.size.toString()] ?? signSize.BW3BH2;

  return (
    <div
      style={{
        width: currentSize.width,
        height: currentSize.height,
      }}
    >
      {props.parts.map((part) => (
        <RoadSignPart {...part} key={nanoid(128)} />
      ))}
    </div>
  );
}
