import { Route, Routes } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Route path="/" element=""/>
    </div>
  );
}

export default App;
