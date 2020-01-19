import React from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";
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
      {list.length ? (
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
      ) : (
        <View>
          <Image
            style={style.img}
            source={require("../../assets/no-items.png")}
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  img: {
    width: "100%",
    resizeMode: "contain"
  }
});

export default MainScreen;
