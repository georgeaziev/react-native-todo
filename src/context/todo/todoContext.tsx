import * as React from "react";
import { List } from "../../MainLayout";

interface ContextInterface {
  deleteTask: (id: string) => void;
  addTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  list: List[];
}

export const TodoContext = React.createContext({} as ContextInterface);
