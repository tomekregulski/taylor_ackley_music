// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callToAction: {
    textAlign: 'center',
    marginTop: '12rem',
  },
  ctaText: {
    marginBottom: '25px',
    animation: '$hiSlide 5000ms',
  },
  ctaBtn: {
    animation: '$moveInBottom 6000ms',
    background: 'transparent',
    border: '2px solid blue',
    color: '#9C5A32',
    // padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '400',
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
};
