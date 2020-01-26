import React from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";

interface Props {
  addTask: (title: string) => void;
}

const Add = ({ addTask }: Props) => {
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
      <AntDesign.Button onPress={pressHandler} name="pluscircleo">
        Добавить
      </AntDesign.Button>
      {/* <Button onPress={pressHandler} title="Добавить" /> */}
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
    width: "60%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: theme.main
  }
});

export default Add;
