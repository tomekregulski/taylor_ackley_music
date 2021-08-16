// eslint-disable-next-line import/no-anonymous-default-export
import image from '../images/landscape2.jpg';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: {
    textAlign: 'center',
    marginTop: '2rem',
    borderBottom: '1px solid black',
    display: 'block',
  },
  worksBackground: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  allVideosContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    marginTop: '2rem',
    boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  allAlbumsContainer: {
    display: 'flex',
    marginTop: '2rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '90vw',
    // marginTop: '2rem',
    // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  hardTellin: {
    width: '90vw',
    marginTop: '2rem',
    boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  bitterroot: {
    width: '90vw',
    marginTop: '2rem',
    boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  strings: {
    width: '90vw',
    marginTop: '2rem',
    boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  workText: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 375px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 511px)': {
    hardTellin: {
      width: '460px',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    bitterroot: {
      width: '460px',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    strings: {
      width: '460px',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
  },
  '@media screen and (min-width: 768px)': {},
  '@media screen and (min-width: 1100px)': {
    title: {
      textAlign: 'left',
      fontSize: '48px',
      marginTop: '3rem',
      marginLeft: '14rem',
      paddingRight: '.5rem',
      paddingBottom: '.5rem',
      borderBottom: '1px solid black',
      display: 'inline-block',
    },
    allVideosContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    videoContainer: {
      marginLeft: '2rem',
      marginRight: '2rem',
    },
    allAlbumsContainer: {
      display: 'inline-flex',
      marginLeft: '14rem',
      marginRight: '14rem',
      marginTop: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    albumContainer: {
      marginRight: '2rem',
      marginLeft: '2rem',
    },
    workText: {
      width: '20rem',
    },
    hardTellin: {
      width: '20rem',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    bitterroot: {
      width: '20rem',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    strings: {
      width: '20rem',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
  },
  '@media screen and (min-width: 1366px)': {},
  '@media screen and (min-width: 1920px)': {},
};
