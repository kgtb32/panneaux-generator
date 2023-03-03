import React, { useRef, useState } from "react";
import {
  ComboBox as ComboBoxProps,
  ComboBoxItem,
} from "../../models/uikit/Combobox";

import UIKitStyle from "../../styles/UIKit";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export default function ComboBox(props: ComboBoxProps) {
  const [displaySubItems, setDisplaySubItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ComboBoxItem>(
    props?.value ?? { name: " ", value: "" }
  );

  const selectDivRef: any = useRef(null);

  return (
    <UIKitStyle.ComboBox.FakeButton onBlur={() => setDisplaySubItems(false)}>
      <div
        className={`select d-flex w-100 p-0 justify-content-between ${
          displaySubItems ? "select-focus " : ""
        }`}
        ref={selectDivRef}
        onClick={() => setDisplaySubItems(true)}
      >
        <div className="d-flex align-center justify-content-center flex-1">
          <p className="p-0">{selectedItem.name}</p>
        </div>
        {displaySubItems ? (
          <RiArrowUpSLine className="my-auto" />
        ) : (
          <RiArrowDownSLine className="my-auto" />
        )}
      </div>
      {displaySubItems && (
        <UIKitStyle.ComboBox.ComboBoxSubItem
          width={selectDivRef?.current?.clientWidth ?? 0}
          className="select-menu"
        >
          {props.items.map((item) => (
            <div
              key={item.name}
              className="w-100 select-item text-center"
              onClick={() => {
                setDisplaySubItems(false);
                setSelectedItem(item);
                props.change(item);
              }}
            >
              {item.name}
            </div>
          ))}
        </UIKitStyle.ComboBox.ComboBoxSubItem>
      )}
    </UIKitStyle.ComboBox.FakeButton>
  );
}
