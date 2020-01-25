import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { theme } from "../theme";
import AppCard from "../components/ui/Card";
import EditModal from "../components/EditModal";
import AppFontBold from "../components/ui/AppFontBold";

interface Props {
  task: {
    id: string;
    title: string;
  };

  deleteTask: (id: string) => void;
  goBack: () => void;
  updateTask: (id: string, title: string) => void;
}

const TodoScreen = ({ goBack, task, deleteTask, updateTask }: Props) => {
  const [modal, setModal] = React.useState<boolean>(false);

  const updateHandler = (title: string) => {
    updateTask(task.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={task.title}
        visible={modal}
        onCancel={() => setModal(false)}
        updateTask={updateHandler}
      />
      <AppCard style={style.card}>
        <AppFontBold style={style.title}>{task.title}</AppFontBold>
        <Button onPress={() => setModal(true)} title="Ред." />
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
