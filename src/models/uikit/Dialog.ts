import { ReactNode } from "react";

export interface Dialog {
  children?: ReactNode;
  onClose?: () => void;
  title: string;
}
