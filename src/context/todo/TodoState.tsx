import * as React from "react";
import { TodoContext } from "./todoContext";
import { reducer } from "./reducer";

const initialState = {
    list: [{ id: "1", title: "Test" }],
};

const TodoState = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const addTask = (title: string) => {
        dispatch({ type: "ADD_TODO", title });
    };

    const deleteTask = (id: string) => {
        dispatch({ type: "DELETE_TODO", id });
    };

    const updateTask = (id: string, title: string) => {
        dispatch({ type: "UPDATE_TODO", id, title });
    };

    return (
        <TodoContext.Provider
            value={{
                list: state.list,
                addTask,
                deleteTask,
                updateTask,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoState;
