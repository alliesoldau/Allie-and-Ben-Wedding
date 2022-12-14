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

// Specail thanks:
// Nicholas Nip for helping me make the Favicon of the bumblebee
// Kris LaRosa for retouching the main picture of Ben and I so that the shed behind my head isnt visible
// Katie Soldau for helping me with flex boxes
// Terence Nip for explaining iFrame to me
// Gehrig Barnes for his endless support (technical and otherwise) while I learned React
