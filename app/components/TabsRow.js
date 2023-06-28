import React from 'react';
import {View} from "react-native";
import TabButton from "./TabButton";

const TabsRow = () => {
    return (
        <View>
            <TabButton label={"Недели"} icon={'calendar-week'} color={'#e77f67'}/>
        </View>
    );
};

export default TabsRow;