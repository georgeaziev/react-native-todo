import { AppLoading } from "expo";
import * as Font from "expo-font";
import React from "react";
import TodoState from "./src/context/todo/TodoState";
import MainLayout from "./src/MainLayout";

const loadApp = async () => {
    await Font.loadAsync({
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
};

const App = () => {
    const [load, setLoad] = React.useState(false);

    if (!load) {
        return (
            <AppLoading
                startAsync={loadApp}
                onError={(err) => console.log(err)}
                onFinish={() => setLoad(true)}
            />
        );
    }

    return (
        <TodoState>
            <MainLayout />
        </TodoState>
    );
};

export default App;
