import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/NavStyles';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { classes } = props;
  return (
    <nav className={classes.nav}>
      <div>
        <Link className={classes.titleLink} to='/'>
          <h1 className={classes.name}>Taylor Ackley</h1>
        </Link>
        {/* <ul className={classes.titleTags}>
          <li>performer</li>
          <li>composer</li>
          <li>educator</li>
        </ul> */}
      </div>
      <div className={classes.navLinks}>
        <div className={classes.firstNavLinks}>
          <Link className={classes.navLinkItem} to='/bio'>
            Bio
          </Link>
          <Link className={classes.navLinkItem} to='/the-deep-roots'>
            The Deep Roots
          </Link>
        </div>
        <div className={classes.secondNavLinks}>
          <Link className={classes.navLinkItem} to='/works'>
            Works
          </Link>
          <Link className={classes.navLinkItem} to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
