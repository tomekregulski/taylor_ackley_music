import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/HomepageStyles';

function Homepage(props) {
  const { classes } = props;
  return (
    <div>
      <main>
        <div className={classes.callToAction}>
          <p className={classes.ctaText}>
            Hard Tellin', the latest release from The Deep Roots Ensemble, is
            available for purchase on Band Camp!
          </p>
          <Button
            href='https://taylorackley.bandcamp.com/album/hard-tellin'
            target='_blank'
            variant='contained'
            color='primary'
          >
            Find it Here!
          </Button>
        </div>
      </main>
    </div>
  );
}

export default withStyles(styles)(Homepage);
