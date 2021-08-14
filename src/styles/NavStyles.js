export default {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    marginLeft: '2rem',
  },
  name: {
    paddingBottom: '.7rem',
    borderBottom: '1px solid black',
  },
  titleTags: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '.7rem',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'flex-end',
    justifyContent: 'space-between',
  },
  navLinkItem: {
    marginRight: '2rem',
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
};
