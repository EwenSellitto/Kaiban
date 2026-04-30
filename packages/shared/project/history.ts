import type { Optional, Prettify } from "../utils";
import type { TaskEntity } from "./tasks";

export enum HistoryActions {
  Move = "move",
  Comment = "comment",
  Edit = "edit",
  Create = "create",
  Delete = "delete",
}

export type ProjectFileChangedModel = {
  id: number;
  historyId: number;
  filePath: string;
  action: HistoryActions;
};

export type ProjectFileChangedEntity = Prettify<
  Optional<ProjectFileChangedModel, "id" | "historyId"> & {
    history?: HistoryEntity;
  }
>;

export type HistoryModel = {
  id: number;
  taskId: number;
  previousColumnId: number;

  meta: string;
  agentComments?: string;
};

export type HistoryEntity = Prettify<
  Optional<HistoryModel, "id" | "previousColumnId"> & {
    task?: TaskEntity;
  }
>;
