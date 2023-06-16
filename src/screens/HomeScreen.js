import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from "react-native";
import { db } from "../../firebase-config";
import ToDoItem from "../components/ToDoItem";
import {
    ref,
    onValue,
    push,
    update,
    remove
} from 'firebase/database';


const HomeScreen = function () {
    const [todos, setTodos] = useState({});
    const [presentTodo, setPresentTodo] = useState('');
    const todosKeys = Object.keys(todos);

    useEffect(() => {
        return onValue(ref(db, '/todos'), querySnapShot => {
            let data = querySnapShot.val() || {};
            let todoItems = { ...data };
            setTodos(todoItems);
        });
    }, []);

    function addNewTodo() {
        push(ref(db, '/todos'), {
            done: false,
            title: presentTodo,
        });
        setPresentTodo('');
    };

    function clearTodos() {
        remove(ref(db, '/todos'));
    };



    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}>
            <View>
                {todosKeys.length > 0 ? (
                    todosKeys.map(key => (
                        <ToDoItem
                            key={key}
                            id={key}
                            todoItem={todos[key]}
                        />
                    ))
                ) : (
                    <Text>No todo item</Text>
                )}
            </View>

            <TextInput
                placeholder="Enter New Task"
                value={presentTodo}
                style={styles.textInput}
                onChangeText={text => {
                    setPresentTodo(text);
                }}
                onSubmitEditing={addNewTodo}
            />

            <View>
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Add New Task"
                        onPress={addNewTodo}
                        color="green"
                        disabled={presentTodo == ''}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Clear Entire Todo list"
                        onPress={clearTodos}
                        color="red"
                        style={{ marginTop: 20 }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};




const styles = StyleSheet.create({
    container : {
        backgroundColor: "#96F1F8"
    },
    textStyle: {
        fontSize: 30,
    },
    textInput: {
        fontSize: 20,
        margin: 20,
        alignSelf: "center",
        borderWidth: 1,
        padding: 10
    }
});

export default HomeScreen;