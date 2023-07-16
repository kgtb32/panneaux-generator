import { MouseEventHandler, ReactNode } from "react";
import { ColorsType } from "./ColorsType";

export interface Button {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: ColorsType;
  className?: string;
}
