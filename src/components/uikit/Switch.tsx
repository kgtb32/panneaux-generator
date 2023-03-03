import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Switch as SwitchProps } from "../../models/uikit/Switch";
import SwitchStyle from "../../styles/UIKit";

export default function Switch(props: SwitchProps) {
  const [selectedItem, setSelectedItem] = useState(
    props.value ?? { display: "", value: "" }
  );

  return (
    <SwitchStyle.Switch.SwitchBase className="d-flex">
      {props.values.map((value) => (
        <SwitchStyle.Switch.SwitchItem
          className="justify-center text-center"
          key={nanoid(128)}
          onClick={() => {
            setSelectedItem(value);
            props.change(value);
          }}
          selected={selectedItem.value === value.value}
        >
          {value.display}
        </SwitchStyle.Switch.SwitchItem>
      ))}
    </SwitchStyle.Switch.SwitchBase>
  );
}
