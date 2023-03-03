import React from "react";
import Button from "./Button";

import { ColorsType } from "../../models/uikit/ColorsType";
import { EditItem as EditItemProps } from "../../models/uikit/EditItem";

import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

export default function EditItem(props: EditItemProps) {
  return (
    <div className="d-flex justify-content-between">
      {!props.children ? (
        <p>
          {!props.displayName || props.displayName === ""
            ? "(aucun texte)"
            : props.displayName}
        </p>
      ) : (
        props.children
      )}
      <div>
        <Button onClick={props.onEdit}>
          <BiEdit />
        </Button>
        <Button color={ColorsType.NEGATIVE} onClick={props.onDelete}>
          <FaTrash />
        </Button>
      </div>
    </div>
  );
}
