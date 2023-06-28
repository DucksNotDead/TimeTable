import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
    withTiming
} from "react-native-reanimated";


const TabButton = ({ icon, color, isActive, onPress, entypo, ghost }) => {

    const transition = useDerivedValue(() => {
        return isActive? withSpring(1) : withTiming(0)
    }, [isActive])

    const aCircleStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: transition.value
                }
            ]
        }
    })
    const aMainStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(transition.value, [0, 1], [1, .8])
                }
            ]
        }
    })

    return (
        <View style={[ styles.container, { flex: 1 }]}>
            <Animated.View style={[ styles.container, ghost? aCircleStyles : {} ]}>
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <Animated.View style={[styles.container, aMainStyles]}>
                        {
                            !entypo?
                                <MaterialCommunityIcons name={icon} size={30} style={{color: isActive? "white" : color}}/>
                                :<Entypo name={icon} size={30} color={"white"}/>
                        }
                    </Animated.View>
                    <Animated.View style={[styles.circle, aCircleStyles, {backgroundColor: color}]}></Animated.View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: 65,
        height: 65,
    },
    circle: {
        position: "absolute",
        zIndex: -1,
        width: 65,
        height: 65,
        borderRadius: 99,
    }
})

export default TabButton;