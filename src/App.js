
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
import 

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
    <NoteState>
     <Router>
      <Navbar/>
      <Alert/>
      <div className="container">
     <Switch>
     <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>

        </Switch>
        </div>
        </Router>
    </NoteState>

    </>
  );
}

export default App;
