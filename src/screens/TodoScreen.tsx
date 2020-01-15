import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { theme } from "../theme";
import AppCard from "../components/ui/Card";

interface Props {
  task: {
    id: string;
    title: string;
  };

  deleteTask: (id: string) => void;
  goBack: () => void;
}

const TodoScreen = ({ goBack, task, deleteTask }: Props) => {
  return (
    <View>
      <AppCard style={style.card}>
        <Text style={style.title}>{task.title}</Text>
        <Button onPress={() => null} title="Редактировать" />
      </AppCard>
      <View style={style.buttons}>
        <View style={style.button}>
          <Button title="Назад" color={theme.grey} onPress={goBack} />
        </View>
        <View style={style.button}>
          <Button
            title="Удалить"
            color={theme.red}
            onPress={() => deleteTask(task.id)}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  },
  title: {
    fontSize: 20
  },
  card: {
    marginBottom: 20
  }
});

export default TodoScreen;
