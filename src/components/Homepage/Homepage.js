import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './HomepageStyles';
import image from '../../images/small/still_19.jpg';

function Homepage(props) {
  const { classes } = props;
  return (
    <div className={classes.homeBackground}>
      <main className={classes.main}>
        <div className={classes.frontCoverContainer}>
          <img src={image} alt='Taylor Ackley' className={classes.frontCover} />
        </div>
        {/* <div className={classes.callToAction}> */}
        {/* <p className={classes.ctaText}>
            Hard Tellin' and Songs From the Bitterroot
          </p>
          <p className={classes.ctaText}>
            are available for purchase on Band Camp!
          </p>
          <Button
            className={classes.ctaBtn}
            href='https://taylorackley.bandcamp.com/album/hard-tellin'
            target='_blank'
            rel='noreferrer'
            variant='contained'
            color='primary'
          >
            Find Them Here!
          </Button> */}
        {/* </div> */}
      </main>
    </div>
  );
}

export default withStyles(styles)(Homepage);
