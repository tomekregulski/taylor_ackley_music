import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/NavStyles';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { classes } = props;
  return (
    <nav className={classes.nav}>
      <div>
        <h1>Taylor Ackley</h1>
      </div>
      <div>
        <ul className={classes.navLinks}>
          <li className={classes.navLinkItem}>
            <Link to='/'>Home</Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to='/bio'>Bio</Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to='/the-deep-roots'>The Deep Roots</Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to='/works'>Works</Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
