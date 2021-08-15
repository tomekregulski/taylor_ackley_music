import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/BioStyles';
import headshot from '../images/taylor_mandolin_headshot.jpg';

function Bio(props) {
  const { classes } = props;
  return (
    <>
      <div>
        <h2 className={classes.title}>Bio</h2>
      </div>
      <div className={classes.bioContainer}>
        <img
          className={classes.headshot}
          src={headshot}
          alt='Taylor Ackley and his mandolin'
        />
        <div className={classes.textContainer}>
          <p className={classes.paragraph}>
            Taylor Ackley is first and foremost a folk musician. Born into a
            working class family with a remarkable heritage of traditional
            American music, his work grows directly out of the rich musical
            expression cultivated across the generations of pickers, singers,
            song writers and fiddlers that populate his family tree. His
            academic training began at Adelphi University where he studied
            classical vocal performance, jazz bass and composition with Sidney
            Boquiren, Christopher Lyndon-Gee and Paul Moravec. Taylor is
            currently a graduate student at Stony Brook University, where he has
            studied composition with Ray Anderson, Perry Goldstein, Margaret
            Schedel, Daria Semegen and Daniel Weymouth. Along with his
            substantial success as a multi-instrumentalist, Taylor has been
            commissioned by a number of soloists, chamber ensembles, choirs and
            jazz bands. His music has been featured in festivals throughout the
            United States as well as Denmark and China.
          </p>
          <p className={classes.paragraph}>
            Taylor has composed large catalogue of original works, which explore
            the various expressive languages he has learned from his wide range
            of musical experiences. This has led to a recent compositional
            output which simultaneously liberates and challenges musicians
            through a unique combination of aural transmission, guided
            improvisation and nontraditional notation coupled with an intense
            reliance on the performer’s own ears. He is the founder and director
            of the Stony Brook Roots Ensemble, a chamber music group which
            focuses on studying and performing Traditional American Music. Their
            debut album Songs from the Bitterroot, features all original music
            and is released by 4Tay records.
          </p>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Bio);