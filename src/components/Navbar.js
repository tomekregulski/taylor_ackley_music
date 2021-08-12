import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/NavStyles';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { classes } = props;
  return (
    <nav className={classes.nav}>
      <div>
        <h1 className={classes.name}>Taylor Ackley</h1>
        <ul className={classes.titleTags}>
          <li>performer</li>
          <li>composer</li>
          <li>educator</li>
        </ul>
      </div>
      <div className={classes.navLinks}>
        <Link className={classes.navLinkItem} to='/'>
          Home
        </Link>
        <Link className={classes.navLinkItem} to='/bio'>
          Bio
        </Link>
        <Link className={classes.navLinkItem} to='/the-deep-roots'>
          The Deep Roots
        </Link>
        <Link className={classes.navLinkItem} to='/works'>
          Works
        </Link>
        <Link className={classes.navLinkItem} to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
