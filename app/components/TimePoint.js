import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {TimeItemHeight} from "../utils/TimeProvider";

const TimePoint = ({ timepoint, navigation }) => {


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{...styles.card, backgroundColor: '#786fa6', height: TimeItemHeight(timepoint.fromTo)}}
                onPress={() => navigation.navigate('timePoint', {title: timepoint.title, todos: timepoint.todos})}
            >
                <Text style={styles.title}>{timepoint.title}</Text>
            </TouchableOpacity>
            <View style={styles.stick}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    card: {
        flex: 11,
        marginHorizontal: 12,
        padding: 12,
        borderRadius: 20,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    stick: {
        backgroundColor: "#9BA4B5",
        opacity: .5,
        borderRadius: 20,
        width: 5,
        marginRight: 20,
    }
})

export default TimePoint