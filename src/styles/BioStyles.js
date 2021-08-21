// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: {
    textAlign: 'center',
    marginTop: '2rem',
    borderBottom: '1px solid black',
    display: 'block',
  },
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    display: 'none',
    // width: '100vw',
  },
  // bioBackground: {
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   backgroundRepeat: 'no-repeat',
  //   // backgroundAttachment: 'fixed',
  //   height: '0vh',
  // },

  textContainer: {
    margin: '2rem 2rem 0 2rem',
    // height: '20rem',
    // overflow: 'hidden',
    // overflowY: 'auto',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  headshot: {
    marginTop: '2rem',
    width: '100vw',
    // marginTop: '2rem',
    // boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 375px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 511px)': {
    headshot: {
      width: '370px',
      marginBottom: '5rem',
    },
    banner: {
      display: 'block',
      width: '100vw',
    },
    bioContainer: {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  '@media screen and (min-width: 768px)': {
    banner: {
      display: 'block',
      width: '100vw',
    },

    textContainer: {
      margin: '2rem 2rem 0 2rem',
    },
    // headshot: {
    //   width: '520px',
    // },
    // bioBackground: {
    //   height: '617px',
    // },
  },
  '@media screen and (min-width: 1366px)': {
    bioBackground: {
      height: '35vh',
    },
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
    bioContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      paddingTop: '2rem',
      paddingBottom: '5rem',
      marginLeft: '8rem',
      marginRight: '8rem',
    },

    headshot: {
      width: '25rem',
      marginTop: '2rem',
      marginBottom: '5rem',
      // boxShadow: '0px 0px 5px 5px rgba(47,44,71,.4)',
    },
  },
  '@media screen and (min-width: 1920px)': {},
};
