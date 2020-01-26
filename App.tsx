import React from "react";
import { StyleSheet, Alert, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import { theme } from "./src/theme";

export interface Methods {
  addTask?: (title: string) => void;
  deleteTask: (id: string) => void;
  onTaskPress?: (id: string) => void;
  goBack?: () => void;
}

type List = { id: string; title: string };

const loadApp = async () => {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  });
};

const App = () => {
  const [load, setLoad] = React.useState(false);
  const [list, setList] = React.useState<List[]>([]);
  const [taskId, setTaskId] = React.useState<string>("");

  if (!load) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={err => console.log(err)}
        onFinish={() => setLoad(true)}
      />
    );
  }

  const addTask = (title: string) => {
    setList(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const deleteTask = (id: string) => {
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

  const updateTask = (id: string, title: string) => {
    setList((prev: any) =>
      prev.map((task: List) => {
        if (task.id === id) {
          task.title = title;
        }
        return task;
      })
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
            updateTask={updateTask}
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
    paddingHorizontal: theme.padding_horizontal,
    paddingVertical: 20
  }
});

export default App;
