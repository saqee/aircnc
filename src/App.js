
import './App.css';
import Home from './components/Home/Home';
import MapSection from './components/MapSection/MapSection'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Book from './components/Book/Book';

function App() {
  return (
    <Router>
     
    <Switch>
    <Route path="/mappage">
      <MapSection></MapSection>
    </Route>
    <Route path="/book">
      <Book></Book>
    </Route>
    <Route exact path="/">
    <Home></Home>
    </Route>
  </Switch>

</Router>
    
  );
}

export default App;
