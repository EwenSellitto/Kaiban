import type { ProjectEntity } from ".";
import type { Optional, Prettify } from "../utils";

export type TaskModel = {
  id: number;
  title: string;
  description: string;
  projectId: number;
  columnId: number;
};

export type TaskEntity = Prettify<
  Optional<TaskModel, "id" | "projectId"> & {
    project?: ProjectEntity;
    dependencies?: TaskDependencyEntity[];
    dependentTasks?: TaskDependencyEntity[];
  }
>;

export type TaskDependencyModel = {
  id: number;
  taskId: number;
  dependsOnTaskId: number;
};

export type TaskDependencyEntity = Prettify<
  Optional<TaskDependencyModel, "id"> & {
    task?: TaskEntity;
    dependsOnTask?: TaskEntity;
  }
>;
