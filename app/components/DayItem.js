import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    withTiming
} from "react-native-reanimated";
import Fab from "./Fab";
import TimePoint from "./TimePoint";
import {TimeItemHeight} from "../utils/TimeProvider";

const DayItem = ({ data, mode, navigation, onOpen, index }) => {

    const [cardSize, setCardSize] = useState(0)

    useEffect(() => {
        const timepoints = []
        data.items.forEach(tp => timepoints.push(tp.fromTo))
        let sum = 0
        timepoints.forEach(tp => sum += TimeItemHeight(tp))
        sum += [...new Set([].concat.apply([], timepoints))].length*40
        setCardSize(sum)
    }, [data])

    const [zIndex, setZIndex] = useState(1)

    useEffect(() => {
        mode === 'days'? setZIndex(1) : setTimeout(() => setZIndex(-1), 300)
    }, [mode])

    const transition = useDerivedValue(() => {
        return mode==='all'? withTiming(0, {duration: 300}) : withTiming(1, {duration: 300})
    }, [mode])

    const aConStyles = useAnimatedStyle(() => {
        return {
            height: interpolate(transition.value, [0, 1], [cardSize, 100])
        }
    })
    const aOverlayStyles = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(transition.value, [0, 1], ['rgba(0, 0, 0, 0)', '#cf6a87']),
        }
    })
    const aTextStyles = useAnimatedStyle(() => {
        return { opacity: transition.value }
    })

    return (
        <TouchableOpacity
            id={data.id}
            onPress={() => onOpen(index, data.id)}
            activeOpacity={ mode!=='days'? 1 : .2 }
            style={{ opacity: mode==='weeks'? 0 : 1 }}
        >
            <Animated.View style={[styles.container, aConStyles]}>
                <Fab label={data.name} day/>
                <FlatList data={data.items} renderItem={({ item, index }) => (
                    <>
                        <Fab label={item.fromTo[0]} />
                        <TimePoint navigation={navigation} timepoint={item}/>
                        {
                            (index+1 < data.items.length && item.fromTo[1] !== data.items[index+1].fromTo[0]) || index+1 === data.items.length
                                ? <Fab label={item.fromTo[1]} />
                                : <></>
                        }
                    </>
                )} keyExtractor={item => item.id} />
                <Animated.View style={[ styles.overlay, aOverlayStyles, {zIndex: zIndex} ]}>
                    <Animated.Text style={[styles.text, aTextStyles]}>{data.name}</Animated.Text>
                </Animated.View>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        overflow: "hidden",
        borderRadius: 20
    },
    overlay: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    }
})

export default DayItem;