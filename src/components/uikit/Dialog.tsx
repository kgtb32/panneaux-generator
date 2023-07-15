import React from "react";
import { Dialog as DialogProps } from "../../models/uikit/Dialog";
import UIKit from "../../styles/UIKit";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Dialog(props: DialogProps) {
  return (
    <UIKit.Dialog.DialogBase withOpacity={false} className="d-flex">
      <UIKit.Dialog.DialogBase
        withOpacity={true}
        onClick={() => props.onClose && props?.onClose()}
      />
      <UIKit.Dialog.DialogWindow>
        <UIKit.Dialog.DialogTitle>
          <span>{props.title}</span>
          <span>
            <RiCloseCircleLine
              size={30}
              onClick={() => props.onClose && props?.onClose()}
            />
          </span>
        </UIKit.Dialog.DialogTitle>
        <UIKit.Dialog.DialogWindowBase>
          {props?.children ?? <p>no children</p>}
        </UIKit.Dialog.DialogWindowBase>
      </UIKit.Dialog.DialogWindow>
    </UIKit.Dialog.DialogBase>
  );
}
