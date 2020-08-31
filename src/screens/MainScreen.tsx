import React from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import Add from "../components/Add";
import List from "../components/List";
import { Methods } from "../types";
import { theme } from "../theme";

interface Props extends Methods {
    list: {
        id: string;
        title: string;
    }[];
}

const MainScreen = ({ addTask, list, deleteTask, onTaskPress }: Props) => {
    const [deviceWidth, setDeviceWidth] = React.useState(
        Dimensions.get("window").width - theme.padding_horizontal * 2
    );

    React.useEffect(() => {
        const update = () => {
            const width = Dimensions.get("window").width - theme.padding_horizontal * 2;
            setDeviceWidth(width);
        };

        Dimensions.addEventListener("change", update);

        return () => {
            Dimensions.removeEventListener("change", update);
        };
    });

    return (
        <View style={{ width: deviceWidth }}>
            <Add addTask={addTask} />
            {list.length ? (
                <View>
                    <FlatList
                        keyExtractor={(item) => item.id.toString()}
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
            ) : (
                <View>
                    <Image style={style.img} source={require("../../assets/no-items.png")} />
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
        height: 300,
    },
    img: {
        width: "100%",
        resizeMode: "contain",
    },
});

export default MainScreen;
