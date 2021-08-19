// eslint-disable-next-line import/no-anonymous-default-export
// import image from '../images/4.jpg';
import image from '../images/homepage/still_19.jpg';
// MAYBES: pics_72, still_7, still_33
// 4 stars: still_36
// 5 Stars: still_19
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callToAction: {
    textAlign: 'center',
    paddingTop: '12rem',
  },
  frontCoverContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontCover: {
    display: 'none',
  },
  homeBackground: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '92vh',
    // backgroundAttachment: 'fixed',
  },
  main: {
    position: 'absolute',
  },
  // ctaText: {
  //   marginBottom: '25px',
  //   animation: '$hiSlide 5000ms',
  // },
  ctaBtn: {
    animation: '$moveInBottom 5000ms',
    background: 'transparent',
    border: '2px solid #17D0FF',
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '400',
    transition: '.7s',
    '&:hover': {
      transform: 'translateY(-3px)',
      background: 'transparent',
      boxShadow: '0 0.3rem 0.2rem rgba(0, 0, 0, 0.256)',
      transition: '.7s',
    },
    '&active': {
      transform: 'translateY(-1px)',
      boxShadow: '0 0.2rem 0.1rem rgba(0, 0, 0, 0.256)',
      transition: '0.4s',
    },
  },
  '@keyframes hiSlide': {
    '0%': {
      opacity: '0',
      // transform: 'translateX(-100px)',
    },
    '30%': {
      opacity: '0',
    },
    // '70%': {
    //   opacity: '.5',
    // transform: 'translateX(-100px)',
    // },
    '100%': {
      opacity: '1',
      // transform: 'translateX(0)',
    },
  },
  '@keyframes moveInBottom': {
    '0%': {
      opacity: '0',
      transform: 'translateY(30px)',
    },
    '80%': {
      opacity: '0',
      transform: 'translateY(30px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 375px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 768px)': {},
  '@media screen and (min-width: 1000px)': {
    homeBackground: {
      backgroundImage: 'none',
      height: '0vh',
    },
    frontCover: {
      display: 'block',
      width: '100vw',
    },
  },
  '@media screen and (min-width: 1366px)': {
    // callToAction: {
    //   position: 'relative',
    //   left: '58rem',
    //   bottom: '10rem',
    // },
    // ctaText: {
    //   marginBottom: '0',
    //   fontWeight: '300',
    // },
    // ctaBtn: {
    //   marginTop: '20px',
    // },
  },
  '@media screen and (min-width: 1920px)': {},
};
