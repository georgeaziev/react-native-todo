import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Add from "../components/Add";
import List from "../components/List";
import { Methods } from "../../App";

interface Props extends Methods {
  list: {
    id: string;
    title: string;
  }[];
}

const MainScreen = ({ addTask, list, deleteTask, onTaskPress }: Props) => {
  return (
    <View>
      <Add addTask={addTask} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({ item }) => (
          <List
            deleteTask={deleteTask}
            todo={item}
            onTaskPress={() => onTaskPress(item.id)}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default MainScreen;
