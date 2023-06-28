import React, {useMemo, useState} from 'react';
import {FlatList, Text, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DeleteIcon from "./DeleteIcon";

const TodoList = ({ todos }) => {

    const [checkedTodos, setCheckedTodos] = useState([])

    const deleteTodosReady = useMemo(() => {
        console.log(checkedTodos)
        return checkedTodos.length > 0
    }, [checkedTodos])

    return (
        <View style={{ display: "flex" }}>
            {
                todos.length>0
                    ?<>
                        <DeleteIcon icon={"delete-sweep-outline"} isActive={deleteTodosReady} filled onPress={() => console.log(deleteTodosReady)}/>
                        <FlatList style={{ paddingBottom: 95 }} data={todos} renderItem={({ item }) => (
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <BouncyCheckbox
                                    text={item.label}
                                    style={{ marginHorizontal: 5, marginVertical: 10, flex: 8 }}
                                    textStyle={{ fontSize: 20, fontWeight: "bold"}}
                                    fillColor={'#778beb'}
                                />
                                <DeleteIcon icon={'delete-outline'} style={{ flex: 2 }}/>
                            </View>
                        )} keyExtractor={item => item.id} />
                    </>
                    :<Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}> Дел нет </Text>
            }
        </View>
    );
};

export default TodoList;