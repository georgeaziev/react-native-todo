import React from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import { theme } from "../theme";

const Add = ({ addTask }) => {
  const [task, setTask] = React.useState("");

  const pressHandler = () => {
    if (task.trim()) {
      setTask("");
      addTask(task);
    } else {
      Alert.alert("Discombobulate and write text");
    }
  };

  return (
    <View style={style.block}>
      <TextInput
        onChangeText={setTask}
        style={style.input}
        value={task}
        placeholder="Введите название задачи"
      />
      <Button onPress={pressHandler} title="Добавить" />
    </View>
  );
};

const style = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: theme.main
  }
});

export default Add;
