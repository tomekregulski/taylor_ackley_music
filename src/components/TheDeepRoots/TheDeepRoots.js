import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './DeepRootsStyles';
import largeEnsemble from '../../images/small/deep_roots_large.jpg';
import taylorAllison from '../../images/small/deep_roots_taylor_allison.jpg';
// import ensemblePose from '../../images/small/session.jpg';
import red_barn from '../../images/small/red_barn.jpg';
import logo from '../../images/small/tdr_logo_clear_bg.png';

function TheDeepRoots(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          className={classes.logo}
          src={logo}
          alt='Taylor Ackley And The Deep Roots Ensemble'
        />
      </div>
      <div>
        <div>
          <p className={classes.textContainer}>
            The Deep Roots Ensemble performs traditional repertoire and original
            music which reflect the historical diversity and continuing
            creativity of folk music practices in the United States. Their style
            blends classical chamber music instrumentation and techniques with
            traditional American music performance practice and jazz
            improvisation into a refined and cohesive approach to making music.
            This results in an artistic output which is highly innovative while
            remaining familiar and relatable to audiences with a wide range of
            tastes. Their first album, <em>Songs from the Bitterroot</em>, was
            financed through a social media, crowdfunding campaign and got them
            signed to the 4Tay Records label. In their latest release,
            <em> Hard Tellin’</em>, The Deep Roots Ensemble builds upon the
            sound heard in first album, but expands its instrumental and
            creative scope. Exploring themes of love, family, sin and salvation,
            <em> Hard Tellin'</em>, captures a more developed and intricate
            approach to American roots music.
          </p>
        </div>
        <div className={classes.imgContainer}>
          <img
            className={classes.large}
            src={largeEnsemble}
            alt='Deep Roots Ensemble performing at the Staller Center for the Arts'
          />
          <img
            className={classes.taylorAllison}
            src={taylorAllison}
            alt='Taylor and Allison performing'
          />
          <img
            className={classes.red_barn}
            src={red_barn}
            alt='Deep Roots Ensemble posing after a recording session'
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(TheDeepRoots);
