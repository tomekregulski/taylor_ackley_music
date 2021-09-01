import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './NavStyles';
import { Link } from 'react-router-dom';
import MenuToggle from '../MenuToggle';
import MobileMenu from '../MobileMenu';

function Navbar(props) {
  const { classes } = props;
  return (
    <nav className={classes.nav}>
      <div>
        <p className={classes.subtitle}>
          the official website of performer, composer and educator
        </p>
        <Link className={classes.titleLink} to='/'>
          <h1 className={classes.name}>Taylor Ackley</h1>
        </Link>
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
      <MenuToggle open={props.open} setOpen={props.setOpen} />
      <MobileMenu open={props.open} setOpen={props.setOpen} />
    </nav>
  );
}

export default withStyles(styles)(Navbar);
