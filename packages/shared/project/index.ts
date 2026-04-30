import type { KanbanEntity } from "../kanban";
import type { Optional, Prettify } from "../utils";
export * from "./tasks";

export type ProjectModel = {
  id: number;
  name: string;
  description: string;
  kanbanId: number;
};

export type ProjectEntity = Prettify<
  Optional<ProjectModel, "id" | "kanbanId"> & {
    tasks?: import("./tasks").TaskEntity[];
    kanban?: KanbanEntity;
  }
>;
