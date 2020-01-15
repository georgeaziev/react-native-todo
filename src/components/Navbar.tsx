import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme";

const Navbar = ({ title }) => {
  return (
    <View style={style.navbar}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: theme.main,
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    fontSize: 20
  }
});

export default Navbar;
