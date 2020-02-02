import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import { theme } from "./theme";
import { TodoContext } from "./context/todo/todoContext";

export type List = { id: string; title: string };

const MainLayout = () => {
  //   const [list, setList] = React.useState<List[]>([]);
  const [taskId, setTaskId] = React.useState<string>("");

  const todoContext = React.useContext(TodoContext);

  //   const addTask = (title: string) => {
  //     setList(prev => [
  //       ...prev,
  //       {
  //         id: Date.now().toString(),
  //         title
  //       }
  //     ]);
  //   };

  //   const deleteTask = (id: string) => {
  //     const selectedTask = list.find(t => t.id === id);
  //     Alert.alert(
  //       "Удаление задачи",
  //       `Вы действительно хотите удалить "${selectedTask.title}"?`,
  //       [
  //         {
  //           text: "Cancel",
  //           style: "cancel"
  //         },
  //         {
  //           text: "Удалить",
  //           onPress: () => {
  //             setTaskId(null);
  //             setList(prev => prev.filter(todo => todo.id !== id));
  //           }
  //         }
  //       ],
  //       { cancelable: false }
  //     );
  //   };

  //   const updateTask = (id: string, title: string) => {
  //     setList((prev: any) =>
  //       prev.map((task: List) => {
  //         if (task.id === id) {
  //           task.title = title;
  //         }
  //         return task;
  //       })
  //     );
  //   };

  console.log(taskId);

  return (
    <View>
      <Navbar title="Задачи" />
      <View style={styles.container}>
        {taskId ? (
          <TodoScreen
            goBack={() => setTaskId(null)}
            task={todoContext.list.find(task => task.id === taskId)}
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
