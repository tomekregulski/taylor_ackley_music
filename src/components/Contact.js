import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ContactStyles';

function Contact(props) {
  const { classes } = props;
  return (
    <div>
      <h2 className={classes.title}>Contact Page - Under Construction</h2>
    </div>
  );
}

export default withStyles(styles)(Contact);
