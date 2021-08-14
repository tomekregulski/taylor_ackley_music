import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/WorksStyles';

function Works(props) {
  const { classes } = props;
  return (
    <div>
      <h2 className={classes.title}>Works Page - Under Construction</h2>
    </div>
  );
}

export default withStyles(styles)(Works);
