import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { theme } from "../theme";
import AppFontBold from "./ui/AppFontBold";

const Navbar = ({ title }: any) => {
  return (
    <View
      style={{
        ...style.navbar,
        ...Platform.select({
          ios: style.navbariOS,
          android: style.navbarAndroid as any
        })
      }}
    >
      <AppFontBold style={style.text}>{title}</AppFontBold>
    </View>
  );
};

const style = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  navbarAndroid: {
    backgroundColor: theme.main
  },
  navbariOS: {
    borderBottomColor: theme.main,
    borderBottomWidth: 1
  },
  text: {
    color: Platform.OS === "ios" ? theme.main : "#fff",
    fontSize: 20
  }
});

export default Navbar;
