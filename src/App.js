import './App.css';
import React from 'react';
import Users from "./components/users/Users";
import NavBar from "./components/partials/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="container">
            <Users />
        </div>
    </div>
  );
}

export default App;
