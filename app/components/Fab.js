import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const Fab = ({ label, day=false }) => {
    return (
        <View  style={day? styles.day : styles.main}>
            <Text style={{ color: "white", fontSize: day? 20 : 15 }}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9BA4B5",
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 5,
        margin: 5,
        alignSelf: "flex-end",
    },
    day: {
        position: "absolute",
        top: -5,
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c44569",
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 5,
        margin: 5
    }
})

export default Fab;