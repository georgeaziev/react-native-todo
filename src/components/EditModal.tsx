import React from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Alert
} from "react-native";
import { theme } from "../theme";

interface Props {
  visible: boolean;
  value: string;

  onCancel: () => void;
  updateTask: (title: string) => void;
}
const EditModal = ({ visible, onCancel, value, updateTask }: Props) => {
  const [title, setTitle] = React.useState(value);

  const saveNewTitle = () => {
    if (title.length < 3) {
      Alert.alert("Минимальная длина названия - 3 символа");
    } else {
      updateTask(title);
    }
  };
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={style.wrap}>
        <TextInput style={style.input} value={title} onChangeText={setTitle} />
        <View style={style.buttons}>
          <Button title="Отменить" onPress={onCancel} color={theme.red} />
          <Button title="Сохранить" onPress={saveNewTitle} />
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    padding: 10,
    borderBottomColor: theme.main,
    borderBottomWidth: 2,
    width: "80%",
    color: "#000"
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default EditModal;
