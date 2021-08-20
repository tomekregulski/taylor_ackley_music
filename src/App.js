import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import TheDeepRoots from './components/TheDeepRoots';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/the-deep-roots' component={TheDeepRoots} />
          <Route exact path='/works' component={Works} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </>
  );
}

export default App;
