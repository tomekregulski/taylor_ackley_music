import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Bio,
  Contact,
  Homepage,
  MenuToggle,
  MobileMenu,
  Navbar,
  TheDeepRoots,
  Works,
} from './components';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
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
