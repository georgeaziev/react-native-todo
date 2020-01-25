import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Methods } from "../../App";
import AppFontRegular from "./ui/AppFonts";

interface Props extends Methods {
  todo: {
    id: string;
    title: string;
  };

  onTaskPress: () => void;
}

const List = ({ todo, deleteTask, onTaskPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onTaskPress}
      onLongPress={() => deleteTask(todo.id)}
    >
      <View style={style.todo}>
        <AppFontRegular>{todo.title}</AppFontRegular>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10
  }
});

export default List;
