import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import HomePage from './pages/HomePage'
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>
          </Switch>
      </Router>


  );
}

export default App;
