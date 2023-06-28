import React, {useRef, useState} from 'react';
import {FlatList} from "react-native";
import DayItem from "./DayItem";

const TimeLine = ({ navigation, mode, data, setMode }) => {

    const dayList = useRef(null)
    const [dayIndex, setDayIndex] = useState(0)

    const dayOpen = (index, id) => {
        setMode()
        setTimeout(() => {
            dayList.current.scrollToIndex({index: index, viewOffset: 0})
        }, 500)
    }

    return (

        <>
            <FlatList ref={dayList} data={data} renderItem={({ item, index }) => (
                <DayItem
                    data={item}
                    index={index}
                    navigation={navigation}
                    mode={mode}
                    onOpen={dayOpen}
                />
            )} keyExtractor={item => item.id}/>
        </>
    );
};

export default TimeLine;