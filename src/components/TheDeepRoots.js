import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/DeepRootsStyles';

function TheDeepRoots(props) {
  const { classes } = props;
  return (
    <>
      <div>
        <h2 className={classes.title}>
          The Deep Roots Page - Under Construction
        </h2>
      </div>
      <div>
        <p>
          The Deep Roots Ensemble merges classical chamber music instrumentation
          and techniques with American folk performance practice into a refined
          and cohesive style. It was formed in 2015 by Taylor Ackley and Alison
          Rowe with the goal of bringing the rich tradition of music making into
          concert halls and academic settings. Since then they have performed
          extensively in the New York area, the Midwest and the Pacific
          Northwest along with giving lecture recitals, workshops and
          masterclasses. Their debut album Songs from the Bitterroot was
          released in 2018 through the 4Tay Records label and their next album
          Hard Tellin’ is scheduled for release in late 2020.
        </p>
      </div>
    </>
  );
}

export default withStyles(styles)(TheDeepRoots);
