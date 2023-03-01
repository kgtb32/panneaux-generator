import React from "react";

import { Arrow as EnumArrow } from "../models/styles/Arrows";

import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

import { ImArrowUpRight2, ImArrowUpLeft2 } from "react-icons/im";

export interface IArrow {
  arrow?: EnumArrow;
}

export default function Arrow({ arrow }: IArrow) {
  const arrowSize = "5em";
  const arrows: any = {
    DROITE: <FaArrowLeft size={arrowSize} />,
    GAUCHE: <FaArrowRight size={arrowSize} />,
    HAUT: <FaArrowUp size={arrowSize} />,
    BAS: <FaArrowDown size={arrowSize} />,
    DIRECTION_DROITE: <ImArrowUpLeft2 size={arrowSize} />,
    DIRECTION_GAUCHE: <ImArrowUpRight2 size={arrowSize} />,
  };

  if (!arrow) {
    return <></>;
  }

  if (arrow === EnumArrow.DEUX_BAS || arrow === EnumArrow.TROIS_BAS) {
    return arrows.BAS;
  }

  return arrows[arrow.toString()] ?? <div />;
}
