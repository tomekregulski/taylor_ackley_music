// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '.5rem',
    position: 'sticky',
    top: '0,',
  },
  name: {
    textAlign: 'left',
    marginLeft: '2rem',
  },
  titleLink: {
    textDecoration: 'none',
    '&:visited': {
      color: 'black',
    },
  },
  subtitle: {
    display: 'none',
  },
  navLinks: {
    display: 'none',
    marginTop: '.5rem',
  },
  // firstNavLinks: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
  // secondNavLinks: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
  navLinkItem: {
    marginRight: '.5rem',
    marginLeft: '.5rem',
    marginBottom: '.5rem',
    transition: 'all .5s',
    textDecoration: 'none',
    color: 'black',
    '&:visited': {
      color: 'black',
    },
    '&:hover': {
      color: 'rgb(196, 125, 79)',
    },
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 760px)': {
    name: {
      marginLeft: 0,
    },
    nav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginLeft: '2rem',
      marginBottom: '1rem',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginRight: '2rem',
    },
  },
  '@media screen and (min-width: 1000px)': {
    nav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginLeft: '2rem',
      marginBottom: '1rem',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    name: {
      textAlign: 'left',
    },
    subtitle: {
      display: 'block',
      fontSize: '12px',
    },
    navLinkItem: {
      marginBottom: '0',
      marginRight: '2rem',
    },
  },
  '@media screen and (min-width: 1366px)': {},
  '@media screen and (min-width: 1920px)': {},
};
