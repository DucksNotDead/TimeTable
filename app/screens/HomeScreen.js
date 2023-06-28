import React, {useEffect, useState} from 'react';
import TimeLine from "../components/TimeLine";
import {SafeAreaView, StyleSheet, View} from "react-native";
import TabButton from "../components/TabButton";

const HomeScreen = ({ navigation }) => {

    const data = [
        {
            name: 'Понедельник', id: 'monday1', items: [
                {title: 'Утро', id: 'tp1', fromTo: ["9:00", "12:15"], todos: [
                        {label: 'Eat', id: 'td1', checked: false},
                        {label: 'Sleep', id: 'td2', checked: false},
                        {label: 'Code', id: 'td3', checked: false},
                    ]},
                {title: 'День', id: 'tp2', fromTo: ["12:15", "16:45"], todos: []},
                {title: 'Вечер', id: 'tp3', fromTo: ["17:00", "22:30"], todos: []},
            ]
        },
        {
            name: 'Вторник', id: 'monday2', items: [
                {title: 'День', id: 'tp2', fromTo: ["12:15", "16:45"], todos: []},
                {title: 'Вечер', id: 'tp3', fromTo: ["17:00", "22:30"], todos: []},
            ]
        },
    ]

    const [mode, setMode] = useState('all')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TimeLine data={data} navigation={navigation} mode={mode} setMode={() => setMode('all')}/>
            <View style={{ height: 80 }}></View>
            <View style={styles.tabsRow}>
                <TabButton icon={'calendar-today'} color={'#c44569'} isActive={mode==='days'} onPress={() => setMode('days')}/>
                <TabButton icon={'timeline-check-outline'} color={'#786fa6'} isActive={mode==='all'} onPress={() => setMode('all')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tabsRow: {
        backgroundColor: "white",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    }
})

export default HomeScreen