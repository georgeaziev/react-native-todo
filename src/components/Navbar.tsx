import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../theme";
import AppFontBold from "./ui/AppFontBold";

const Navbar = ({ title }: any) => {
  return (
    <View style={style.navbar}>
      <AppFontBold style={style.text}>{title}</AppFontBold>
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
