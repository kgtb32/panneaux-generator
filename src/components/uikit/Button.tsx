import React from "react";

import { Button as ButtonProps } from "../../models/uikit/Button";

export default function Button(infos: ButtonProps) {
  const colorBasedClass: any = {
    PRIMARY: "button-primary",
    DISABLED: "button-disabled",
    POSITIVE: "button-positive",
    NEGATIVE: "button-negative",
  };
  const colorClass = infos.disabled
    ? colorBasedClass.DISABLED
    : colorBasedClass[infos?.color ?? ""] ?? colorBasedClass.PRIMARY;

  return (
    <button
      className={`button w-fit-content user-select-none ${colorClass}`}
      onClick={infos.onClick}
      disabled={infos.disabled}
    >
      {infos.children}
    </button>
  );
}
