// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2rem',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundAttachment: 'fixed',
  },
  logo: {
    maxWidth: '60vw',
  },
  textContainer: {
    margin: '2rem 2rem 0 2rem',
    color: 'black',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5rem',
    marginTop: '2rem',
  },
  large: {
    width: '100vw',
    marginTop: '2rem',
  },
  taylorAllison: {
    width: '100vw',
    marginTop: '2rem',
  },
  red_barn: {
    width: '100vw',
    marginTop: '2rem',
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 375px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 530px)': {
    large: {
      width: '480px',
    },
    taylorAllison: {
      width: '480px',
    },
    red_barn: {
      width: '480px',
    },
  },
  '@media screen and (min-width: 1230px)': {
    logoContainer: {
      paddingTop: '4rem',
    },
    logo: {
      maxWidth: '40vw',
    },
    textContainer: {
      marginTop: '4rem !important',
    },
    imgContainer: {
      marginRight: '8rem',
      marginLeft: '8rem',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '4rem',
      paddingBottom: '0,',
    },
    large: {
      width: '25rem',
    },
    taylorAllison: {
      width: '25rem',
      marginLeft: '2rem',
    },
    red_barn: {
      width: '25rem',
      marginTop: '2rem',
      marginLeft: '2rem',
    },
  },
  '@media screen and (min-width: 1366px)': {
    rootsBackground: {
      height: '200vh',
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
    textContainer: {
      margin: '2rem 12rem 0 14rem',
    },
    imgContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    large: {
      width: '30rem',
      marginBottom: '2rem',
    },
    taylorAllison: {
      width: '30rem',
      marginBottom: '2rem',
    },
    pose: {
      width: '30rem',
      marginBottom: '2rem',
    },
    red_barn: {
      width: '30rem',
      marginTop: '0',
      // marginBottom: '2rem',
      marginBottom: '0',
    },
  },
  '@media screen and (min-width: 1920px)': {},
};
