
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
function App() {
  return (
    <>
    <NoteState>
     <Router>
      <Navbar/>
      <div className="container">
     <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
        </div>
        </Router>
    </NoteState>

    </>
  );
}

export default App;
