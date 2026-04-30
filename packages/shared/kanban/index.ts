import type { Optional, Prettify } from "../utils";
import type { ColumnEntity } from "./column";

export type KanbanModel = {
  id: number;
  name: string;
};

export type KanbanEntity = Prettify<
  Optional<KanbanModel, "id"> & {
    columns?: ColumnEntity[];
  }
>;
