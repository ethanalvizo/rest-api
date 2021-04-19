import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList'
import firebase from './util/firebase';

function App() {
  return (
    <div >
      <h1>Todo</h1>
      <Form />
      <ToDoList/>
    </div>
  );
}

export default App;
