import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Animated, {useAnimatedStyle, useDerivedValue, withSpring, withTiming} from "react-native-reanimated";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const DeleteIcon = ({ icon, onPress, filled, style, isActive }) => {

    const transition = useDerivedValue(() => {
        return isActive? withSpring(1) : withTiming(0)
    }, [isActive])

    const aMainStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: transition.value
                }
            ]
        }
    })

    return (
        <View style={style}>
            <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={onPress}>
                <Animated.View style={[styles.deleteIcon, aMainStyles, filled? {backgroundColor: '#eb2f06'} : {}]}>
                    <MaterialCommunityIcons
                        name={icon}
                        size={filled? 22 : 27}
                        style={{ alignSelf: "flex-end", color: filled? "white" : '#eb2f06' }}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    deleteIcon: {
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 99,
        margin: 10,
    }
})

export default DeleteIcon;