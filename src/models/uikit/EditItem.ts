import { ReactNode } from "react";

export interface EditItem {
  deleteVisible: boolean;
  editVisible: boolean;
  onEdit: () => void;
  onDelete: () => void;
  children?: ReactNode;
  displayName?: string;
}
