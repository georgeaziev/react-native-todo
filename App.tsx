import React from "react";
import { StyleSheet, Alert, View } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

const App = () => {
  const [list, setList] = React.useState([]);
  const [taskId, setTaskId] = React.useState("2");

  const addTask = title => {
    setList(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const deleteTask = id => {
    const selectedTask = list.find(t => t.id === id);
    Alert.alert(
      "Удаление задачи",
      `Вы действительно хотите удалить "${selectedTask.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Удалить",
          onPress: () => {
            setTaskId(null);
            setList(prev => prev.filter(todo => todo.id !== id));
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Navbar title="Задачи" />
      <View style={styles.container}>
        {taskId ? (
          <TodoScreen
            goBack={() => setTaskId(null)}
            task={list.find(task => task.id === taskId)}
            deleteTask={deleteTask}
          />
        ) : (
          <MainScreen
            addTask={addTask}
            deleteTask={deleteTask}
            list={list}
            onTaskPress={setTaskId}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});

export default App;
