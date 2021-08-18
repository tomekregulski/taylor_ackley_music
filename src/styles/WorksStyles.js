// eslint-disable-next-line import/no-anonymous-default-export
import image2 from '../images/landscape2.jpg';
import image from '../images/sky.png';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // title: {
  //   textAlign: 'center',
  //   marginTop: '2rem',
  //   borderBottom: '1px solid black',
  //   display: 'block',
  // },
  worksBackground: {
    borderTop: '1px solid black',
    paddingTop: '2rem',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  allVideosContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  videoContainer: {
    marginTop: '2rem',
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
    margin: '0 2rem',
    // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  hardTellin: {
    width: '100vw',
    marginTop: '2rem',
    // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  bitterroot: {
    width: '100vw',
    marginTop: '2rem',
    // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  strings: {
    width: '100vw',
    marginTop: '2rem',
    // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
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
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    bitterroot: {
      width: '460px',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    strings: {
      width: '460px',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
  },
  '@media screen and (min-width: 768px)': {
    allAlbumsContainer: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      marginLeft: '1rem',
      display: 'flex',
      flexDirection: 'row',
    },
    workText: {
      width: '32rem',
      marginLeft: '1rem',
    },
    hardTellin: {
      width: '15rem',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    bitterroot: {
      width: '15rem',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    strings: {
      width: '15rem',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
  },
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
    worksBackground: {
      paddingTop: '2rem',
      backgroundImage: `url(${image2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
    // allVideosContainer: {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'baseline',
    // },
    // videoContainer: {
    //   marginLeft: '2rem',
    //   marginRight: '2rem',
    // },
    allAlbumsContainer: {
      // marginLeft: '2rem',
      // marginRight: '2rem',
      // marginTop: '2rem',
      padding: '0 2rem 8rem 2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      // flexDirection: 'row',
    },
    albumContainer: {
      marginRight: '2rem',
      marginLeft: '2rem',
      display: 'flex',
      flexDirection: 'row',
    },
    workText: {
      width: '35rem',
      marginLeft: '2rem',
      // paddingTop: '2rem',
    },
    hardTellin: {
      width: '20rem',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    bitterroot: {
      width: '20rem',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
    strings: {
      width: '20rem',
      marginTop: '2rem',
      // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
  },
  '@media screen and (min-width: 1366px)': {},
  '@media screen and (min-width: 1920px)': {},
};
