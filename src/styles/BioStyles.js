import image from '../images/landscape3.jpg';
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
  bioBackground: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '92vh',
    backgroundAttachment: 'fixed',
  },
  textContainer: {
    margin: '2rem 2rem 0 2rem',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  headshot: {
    width: '90vw',
    marginTop: '2rem',
    boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 375px)': {},
  '@media screen and (min-width: 411px)': {},
  '@media screen and (min-width: 580px)': {
    headshot: {
      width: '520px',
    },
  },
  '@media screen and (min-width: 768px)': {},
  '@media screen and (min-width: 1366px)': {
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
      marginLeft: '12rem',
      marginRight: '6rem',
    },
    textContainer: {
      margin: '2rem 2rem 0 2rem',
    },
    headshot: {
      width: '20rem',
      marginTop: '2rem',
      boxShadow: '0px 0px 5px 5px rgba(255,255,255,.3)',
    },
  },
  '@media screen and (min-width: 1920px)': {},
};
