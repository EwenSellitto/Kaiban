import type { Prettify } from "../utils";
import type { KanbanEntity } from "../kanban";

export enum ColumnActions {
  Build = "build",
  Plan = "plan",
  Refine = "refine",
  Review = "review",
  Deploy = "deploy",
}

type __ColumnModel = {
  id: number;
  kanbanId: number;

  name: string;
  description?: string;

  prompt?: string;
  action?: ColumnActions;
};

type ActionAndPrompt =
  | { action: ColumnActions; prompt: string }
  | { action?: never; prompt?: never };

export type ColumnModel = Prettify<__ColumnModel & ActionAndPrompt>;

export type ColumnEntity = Omit<ColumnModel, "id" | "kanbanId"> & {
  kanban?: KanbanEntity;
};
