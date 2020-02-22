import { List } from "../../MainLayout";

type Action =
  | { type: "ADD_TODO"; title: string }
  | { type: "DELETE_TODO"; id: string }
  | { type: "UPDATE_TODO"; id: string; title: string };

interface State {
  list: List[];
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now().toString(),
            title: action.title
          }
        ]
      };
    case "DELETE_TODO":
      console.log(action);
      return {
        ...state,
        list: state.list.filter(task => task.id !== action.id)
      };
    case "UPDATE_TODO":
      return {
        ...state,
        list: state.list.map(task => {
          if (task.id === action.id) {
            task.title = action.title;
          }
          return task;
        })
      };

    default:
      return state;
  }
};
