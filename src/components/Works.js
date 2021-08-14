import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/WorksStyles';
import hardTellin from '../images/hard_tellin.jpeg';
import bitterroot from '../images/bitterroot.jpeg';
import strings from '../images/strings.png';

function Works(props) {
  const { classes } = props;
  return (
    <>
      <div>
        <h2 className={classes.title}>Works</h2>
      </div>
      <div className={classes.videoContainer}>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/dKmCx_Oo22E'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
      </div>
      <div className={classes.allAlbumsContainer}>
        <div className={(classes.hardTellinContainer, classes.albumContainer)}>
          <a
            href='https://taylorackley.bandcamp.com/album/hard-tellin'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={hardTellin}
              alt="Hard Tellin'"
              className={(classes.hardTellin, classes.albumContainer)}
            />
          </a>
          <p className={classes.workText}>
            Taylor Ackley and the Deep Roots Ensemble return with our second
            album, Hard Tellin’. This work builds upon the approach heard in our
            first release, Songs from the Bitterroot, blending American folk and
            roots song with classical chamber music and jazz improvisation, but
            expands our instrumental and creative scope. Exploring themes of
            love, family, sin and salvation, this album captures a more refined,
            cohesive approach to making music.
          </p>
        </div>
        <div className={(classes.bitterrootContainer, classes.albumContainer)}>
          <a
            href='https://taylorackley.bandcamp.com/album/songs-from-the-bitterroot'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={bitterroot}
              alt='Songs From the Bitterroot'
              className={classes.bitterroot}
            />
          </a>
          <p className={classes.workText}>
            The first album by Taylor Ackley and the Deep Roots Ensemble, Songs
            from the Bitterroot features all original music, including favorites
            like "Far from Home", "Love Letters" and "That Don't Bother Me".
          </p>
        </div>
        <div className={classes.stringsContainer}>
          <a href='/'>
            <img src={strings} alt='26 Strings' className={classes.strings} />
          </a>
          <p className={classes.workText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad.
            Beatae, voluptatum provident repellendus consequuntur neque velit
            voluptatem soluta praesentium alias deleniti maiores iste error
            cumque quisquam, ex et odit dolorem aspernatur architecto deserunt.
            A, sequi! Sed enim non laborum officia id minus? Sequi aut animi
            itaque. Aliquid dolores numquam, sequi sed praesentium provident cum
            labore, laudantium ducimus mollitia reprehenderit?
          </p>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Works);
