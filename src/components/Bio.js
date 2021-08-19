import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/BioStyles';
import headshot from '../images/taylor_mandolin_headshot.jpg';
import headshot2 from '../images/homepage/pics_72.jpg';
import banner from '../images/bio_banner.png';

function Bio(props) {
  const { classes } = props;
  return (
    <div>
      {/* <div>
        <h2 className={classes.title}>Bio</h2>
      </div> */}
      {/* <div className={classes.bioBackground}></div> */}
      <div>
        <img className={classes.banner} src={banner} alt='Mountains' />
      </div>
      <div className={classes.bioContainer}>
        <img
          className={classes.headshot}
          src={headshot2}
          alt='Taylor Ackley and his mandolin'
        />
        <div className={classes.textContainer}>
          <p className={classes.paragraph}>
            Taylor Ackley is first and foremost a folk musician. Born into a
            working class family with a remarkable heritage of traditional
            American music, his work grows directly out of the rich musical
            expression cultivated across the generations of pickers, singers,
            song writers and fiddlers that populate his family tree. His
            academic training began at Adelphi University. He continued his
            studies at Stony Brook University, where he earned a Master’s Degree
            and a PhD in Composition as well as a Master’s Degree in
            Ethnomusicology.
          </p>
          <p className={classes.paragraph}>
            Taylor is a scholar, composer and performer of American Roots music.
            His research works to understand and analyze American Folk and Roots
            music as art grounded in the experiences of poor and working-class
            people. He has presented papers at a number of conferences and
            panels including the International Bluegrass Music Association and
            the Northwestern Chapter of the Society for Ethnomusicology and is
            also in demand as a guest lecturer at colleges and public
            institutions. He has recently given talks at Vassar College,
            California State University Stanislaus, and the University of
            Wisconsin-Stout. He is published by the MIT Press in Between the
            Tracks. As a composer, Taylor has been commissioned by a number of
            soloists, chamber ensembles, choirs and jazz bands. His music has
            been featured in festivals throughout the United States as well as
            Denmark and China.
          </p>
          <p className={classes.paragraph}>
            Taylor is the founder and director of the Deep Roots Ensemble. A
            group which merges classical chamber music instrumentation and
            techniques with traditional American music performance practice into
            a refined and cohesive style. They have performed around the United
            States and have released two albums of Taylor’s music, Songs from
            the Bitterroot (2018) and Hard Tellin’ (2020) both through the 4Tay
            Records label.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Bio);
