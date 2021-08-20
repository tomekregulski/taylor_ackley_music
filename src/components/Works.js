import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/WorksStyles';
import hardTellin from '../images/small/hard_tellin.jpeg';
import bitterroot from '../images/small/bitterroot.jpeg';
import strings from '../images/small/26_strings_dark_blue.png';
import image2 from '../images/small/mountains_banner.png';

function Works(props) {
  const { classes } = props;
  return (
    <div className={classes.worksBackgroundSmall}>
      <div className={classes.worksBackground}>
        <img className={classes.banner} src={image2} alt='Mountains' />
      </div>
      {/* <div>
        <h2 className={classes.title}>Works</h2>
      </div> */}
      {/* <div className={classes.allVideosContainer}>
        <div className={classes.videoContainer}>
          <iframe
            width='320'
            height='188'
            src='https://www.youtube.com/embed/dKmCx_Oo22E'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </div>
        <div className={classes.videoContainer}>
          <iframe
            width='320'
            height='188'
            src='https://www.youtube.com/embed/FSz-_9m8z7c'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </div>
      </div> */}
      <div className={classes.allAlbumsContainer}>
        <div className={classes.albumContainer}>
          <a
            href='https://taylorackley.bandcamp.com/album/hard-tellin'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={hardTellin}
              alt="Hard Tellin'"
              className={classes.hardTellin}
            />
          </a>
          <p className={classes.workText}>
            Taylor Ackley and the Deep Roots Ensemble return with our second
            album,
            <strong>
              <em>Hard Tellin' </em>
            </strong>
            . This work builds upon the approach heard in our first release,
            Songs from the Bitterroot, blending American folk and roots song
            with classical chamber music and jazz improvisation, but expands our
            instrumental and creative scope. Exploring themes of love, family,
            sin and salvation, this album captures a more refined, cohesive
            approach to making music.
          </p>
        </div>
        <div className={classes.albumContainer}>
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
            The first album by Taylor Ackley and the Deep Roots Ensemble,
            <strong>
              <em>Songs From the Bitterroot </em>
            </strong>
            features all original music, including favorites like "Far from
            Home", "Love Letters" and "That Don't Bother Me".
          </p>
        </div>
        <div className={classes.albumContainer}>
          <a href='/'>
            <img src={strings} alt='26 Strings' className={classes.strings} />
          </a>
          <p className={classes.workText}>
            <strong>
              <em>26 Strings </em>
            </strong>
            grows out of the friendship and musical connection between master
            bluegrass mandolinist Buddy Merriam and composer and mandolinist
            Taylor Ackley. This album of mandolin duet music features original
            compositions as well as standards from the folk, bluegrass and jazz
            repertoires. Merriam and Ackley are joined by the stellar talents of
            guitarist Steve Salerno and bassist Keenan Zach. Played on all
            acoustic instruments, including two mandolins and a guitar built by
            renowned luthier John Monteleone, and recorded at the highest
            fidelity, this album puts the listener right in the room with these
            musicians. You won’t believe the sound coming from just 26 Strings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Works);
