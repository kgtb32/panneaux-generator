export interface Switch {
  values: SwitchValue[];
  change: (value: SwitchValue) => void;
  value: SwitchValue;
}

export interface SwitchValue {
  value: string;
  display: string;
}
