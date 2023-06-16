import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import { db } from "../../firebase-config";
import {
    ref,
    onValue,
    push,
    update,
    remove
} from 'firebase/database';

/**
 * We need a component to display a task from the to do list 
 * and manage the state of that task. 
 * This component will be responsible for indicating
 * whether or not a certain task has been done. 
 */

const ToDoItem = ({ todoItem: { title, done }, id }) => {
    const [doneState, setDone] = useState(false);

    const onCheck = (isChecked) => {
        setDone(isChecked);
        update(ref(db, '/todos'), {
            [id]: {
                title,
                done: !(doneState),
            },
        });
    };

    return (
        <View style={styles.todoItem}>
            <Checkbox
                value={done}
                onValueChange={onCheck}
            />

            <Text style={[styles.todoText, { opacity: doneState ? 0.2 : 1 }]}>
                {title}
            </Text>
        </View>
    );
};



const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 20
    },
    todoText: {
        paddingHorizontal: 5,
        fontSize: 16
    },
});

export default ToDoItem;