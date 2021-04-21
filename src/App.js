import React from 'react';
import './App.css';
// import Form from './components/Form';
// import ToDoList from './components/ToDoList';
import TopBar from './components/TopBar/TopBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div >
      <TopBar />
      <Dashboard />
    </div>
  );
}

export default App;
