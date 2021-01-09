import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Teste from './components/teste'
import Home from './components/Home'




function App() {
  return (
    <>
    <Home home={true}/>
      <Router>      
      <Switch>
        <Route exact path="/">  </Route>
        <Route path="/Teste"><Teste /> </Route>

      </Switch>

    </Router>
    </>
  );
}

export default App;
