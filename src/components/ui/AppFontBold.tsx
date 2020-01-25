import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  style?: any;
  children: React.ReactNode;
}

const AppFontBold = (props: Props) => {
  return (
    <Text style={{ ...style.default, ...props.style }}>{props.children}</Text>
  );
};

const style = StyleSheet.create({
  default: {
    fontFamily: "roboto-bold"
  }
});

export default AppFontBold;
