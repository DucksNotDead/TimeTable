import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import TabButton from "../components/TabButton";
import TodoList from "../components/TodoList";


export default function TimePointScreen ({ route }) {

    const [isActive, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => setActive(true), 300)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, display: "flex"}}>
            <TodoList todos={route.params.todos}/>
            <View style={styles.tabsRow}>
                <TabButton icon={'add-to-list'} color={'#778beb'} isActive={isActive} entypo ghost/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    tabsRow: {
        overflow: "hidden",
        backgroundColor: "#F2F2F2",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 15,
    }
})