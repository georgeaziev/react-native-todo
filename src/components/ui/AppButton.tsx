import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import AppFontBold from "./AppFontBold";
import { theme } from "../../theme";

interface Props {
  children: React.ReactNode;
  color?: any;

  onPress: () => void;
}

const AppButton = ({ children, onPress, color = theme.main }: Props) => {
  const Wrapper: any =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Wrapper activeOpacity={0.7} onPress={onPress}>
      <View style={{ ...style.button, backgroundColor: color }}>
        <AppFontBold style={style.text}>{children}</AppFontBold>
      </View>
    </Wrapper>
  );
};

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff"
  }
});

export default AppButton;
