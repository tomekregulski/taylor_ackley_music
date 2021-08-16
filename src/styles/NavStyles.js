// eslint-disable-next-line import/no-anonymous-default-export
import image from '../images/landscape2.jpg';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
  },
  body: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '85vh',
  },
  name: {
    paddingBottom: '.7rem',
    borderBottom: '1px solid black',
    textAlign: 'center',
  },
  // titleTags: {
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   marginTop: '.7rem',
  //   paddingBottom: '2rem',
  // },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstNavLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  secondNavLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  navLinkItem: {
    marginRight: '.5rem',
    marginLeft: '.5rem',
    marginBottom: '.5rem',
    // marginRight: '2rem',
    transition: 'all .5s',
    textDecoration: 'none',
    color: 'black',
    '&:visited': {
      color: 'black',
    },
    '&:hover': {
      color: 'white',
      textShadow: '0.2rem 0.2rem 10px black',
    },
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 768px)': {},
  '@media screen and (min-width: 1366px)': {
    nav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '2rem',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    name: {
      paddingBottom: '.7rem',
      borderBottom: '1px solid black',
    },
    titleTags: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '.7rem',
      paddingBottom: '2rem',
    },
  },
  '@media screen and (min-width: 1920px)': {},
};
