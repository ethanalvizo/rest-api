import React, { useState } from 'react';
import firebase from '../../util/firebase';

export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createToDo = () => {
        const toDoRef = firebase.database().ref("Todo");
        const todo = {
            title,
            complete: false,

        };

        toDoRef.push(todo)
    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createToDo}>Add Todo</button>
        </div>
    )
}
