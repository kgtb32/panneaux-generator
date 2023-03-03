export interface ComboBox {
  items: ComboBoxItem[];
  change: (e: ComboBoxItem) => void;
  value?: ComboBoxItem;
}

export interface ComboBoxItem {
  name: string;
  value: string;
}
