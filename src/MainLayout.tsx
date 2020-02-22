import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import { theme } from "./theme";
import { TodoContext } from "./context/todo/todoContext";

export type List = { id: string; title: string };

const MainLayout = () => {
  const [taskId, setTaskId] = React.useState<string>("");

  const todoContext = React.useContext(TodoContext);

  const currentTask = todoContext.list.find(task => task.id === taskId);

  console.log(currentTask);

  return (
    <View>
      <Navbar title="Задачи" />
      <View style={styles.container}>
        {currentTask ? (
          <TodoScreen
            goBack={() => setTaskId(null)}
            task={currentTask}
            deleteTask={todoContext.deleteTask}
            updateTask={todoContext.updateTask}
          />
        ) : (
          <MainScreen
            addTask={todoContext.addTask}
            deleteTask={todoContext.deleteTask}
            list={(todoContext as any).list}
            onTaskPress={setTaskId}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding_horizontal,
    paddingVertical: 20
  }
});

export default MainLayout;
