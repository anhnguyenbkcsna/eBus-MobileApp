import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require("'../../../assets/Resources/top_bar.png'")}
                resizeMode="contain"
                style={{ height: 50 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#fff",
    },
});