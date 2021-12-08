
import './App.css';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
function App() {
  return (
    <>
     <Router>
      <Navbar/>
     <Switch>
          <Route exact path="/" component={Home}/>
            {/* <Home />
          </Route> */}
          <Route exact path="/about" component={About}/>
            {/* <About />
          </Route> */}
        </Switch>
        </Router>
    <h1>This is iNotebook</h1>
    </>
  );
}

export default App;
