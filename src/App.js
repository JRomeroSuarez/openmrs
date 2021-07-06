import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DataPage from "./pages/DataPage";
import FormsPage from "./pages/FormsPage";
import ParticipantsPage from "./pages/ParticipantsPage";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>
              <Route exact path="/study/:studyName/forms/:formName">
                  <DataPage/>
              </Route>
              <Route exact path="/study/:studyName/forms">
                  <FormsPage/>
              </Route>
              <Route exact path="/study/:studyName/participants">
                  <ParticipantsPage/>
              </Route>
          </Switch>
      </Router>


  );
}

export default App;
