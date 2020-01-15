import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Methods } from "../../App";

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
        <Text>{todo.title}</Text>
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
