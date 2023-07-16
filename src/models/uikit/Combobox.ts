import { ReactNode } from "react";

export interface ComboBox {
  items: ComboBoxItem[];
  change: (e: ComboBoxItem) => void;
  value?: ComboBoxItem;
  className?: string;
}

export interface ComboBoxItem {
  name: string | ReactNode;
  value: string;
}
