import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Details from "./Components/Details"
import RSVP from "./Components/RSVP"
import Travel from "./Components/Travel"
import Accommodations from './Components/Accommodations';
import Registry from './Components/Registry';

// google form :https://bootcamp.uxdesign.cc/custom-google-form-interface-with-reactjs-5d6762d8fa65
// api call: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScoInHhWkDP6zNJt7vpNxB6gZ4ejR_uC4KTwZ0J-y7o7DKMyA/formResponse"
// can you attend (radio)
// entry.877086558
// whats ur name? (text)
// entry.1498135098
// contact email? (text)
// entry.34447350
// plus 1? (radio)
// entry.233949353
// plus 1 name (text)
// entry.872418501
// questions for us (text)
// entry.2606285


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Page-Content">
        <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/travel">
              <Travel />
            </Route>
            <Route path="/rsvp">
              <RSVP />
            </Route>
            <Route path="/accommodations">
              <Accommodations />
            </Route>
            <Route path="/registry">
              <Registry />
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
