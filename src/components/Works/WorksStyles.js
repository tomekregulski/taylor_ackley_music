// eslint-disable-next-line import/no-anonymous-default-export
export default {
  banner: {
    display: 'none',
  },
  heading: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  allAlbumsContainer: {
    display: 'flex',
    marginTop: '1rem',
    paddingBottom: '5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 2rem',
  },
  hardTellin: {
    width: '100vw',
    marginTop: '2rem',
  },
  bitterroot: {
    width: '100vw',
    marginTop: '2rem',
  },
  strings: {
    width: '100vw',
    marginTop: '2rem',
  },
  workText: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 375px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 511px)': {
    banner: {
      width: '100vw',
      display: 'block',
    },
    hardTellin: {
      width: '460px',
      marginTop: '2rem',
    },
    bitterroot: {
      width: '460px',
      marginTop: '2rem',
    },
    strings: {
      width: '460px',
      marginTop: '2rem',
    },
    workText: {
      width: '470px',
    },
  },
  '@media screen and (min-width: 768px)': {
    worksBackgroundSmall: {
      backgroundImage: 'none',
    },
    banner: {
      width: '100vw',
    },
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
      textAlign: 'left',
    },
    hardTellin: {
      width: '15rem',
      marginTop: '2rem',
    },
    bitterroot: {
      width: '15rem',
      marginTop: '2rem',
    },
    strings: {
      width: '15rem',
      marginTop: '2rem',
    },
  },
  '@media screen and (min-width: 1100px)': {
    title: {
      fontWeight: 'bold',
    },
    allAlbumsContainer: {
      padding: '0 2rem 8rem 2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      marginRight: '2rem',
      marginLeft: '2rem',
      display: 'flex',
      flexDirection: 'row',
    },
    workText: {
      width: '40rem',
      marginLeft: '2rem',
    },
    hardTellin: {
      width: '20rem',
      marginTop: '2rem',
    },
    bitterroot: {
      width: '20rem',
      marginTop: '2rem',
    },
    strings: {
      width: '20rem',
      marginTop: '2rem',
    },
  },
  '@media screen and (min-width: 1366px)': {},
  '@media screen and (min-width: 1920px)': {},
};
