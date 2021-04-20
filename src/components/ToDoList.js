import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';

export default function ToDoList() {
    const [toDoList, setToDoList] = useState();

    useEffect (() => {
        const toDoRef = firebase.database().ref("Todo");

        toDoRef.on('value', (snapshot) => {
            const toDos = snapshot.val();
            console.log(toDos);
            const toDoList = [];

            for (let id in toDos) {
                toDoList.push(toDos[id])
            }

        setToDoList(toDoList);
        });

    }, []);

    return (
        <div>
            {toDoList ? toDoList.map((item) => (<h1>{item.title}</h1>)) : null}
        </div>
    )
}
