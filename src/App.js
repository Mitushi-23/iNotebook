
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import React from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp';
import {useState} from 'react';

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) =>
    setalert({
      msg: message,
      type: type
    })
   setTimeout(() => {
    setalert(null);
  }, 1500);
 
  return (
    <>
    <NoteState showAlert={showAlert}>
     <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
     <Switch>
     <Route exact path="/home">
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <SignUp showAlert={showAlert}/>
          </Route>

        </Switch>
        </div>
        </Router>
    </NoteState>

    </>
  );
}

export default App;
