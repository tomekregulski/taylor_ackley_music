import React, { useState } from 'react';
// import styles from '../styles/ContactStyles';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

init('user_sWNT4oROPiAoUGksmqFlD');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4rem',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  heading: {
    marginTop: '6rem',
    textAlign: 'center',
  },
  submitBtn: {
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
}));

function Contact({ handleClose }) {
  // const { classes } = props;
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  // const [contactNumber, setContactNumber] = useState('000000');

  // const generateContactNumber = () => {
  //   const numStr = '000000' + ((Math.random() * 1000000) | 0);
  //   setContactNumber(numStr.substring(numStr.length - 6));
  // };

  const onSubmit = (data) => {
    console.log(data);
    const form = document.querySelector('#contact-form');
    sendForm('default_service', 'template_xu5gbwo', '#contact-form').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <>
      <div className={classes.heading}>
        <h2>
          I'd love to hear from you! Please use the form below to get in touch.
        </h2>
      </div>
      <form
        className={classes.root}
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Name'
              variant='filled'
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: 'Name required' }}
        />
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Email'
              variant='filled'
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type='email'
            />
          )}
          rules={{ required: 'Email required' }}
        />
        <Controller
          name='message'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Message'
              variant='filled'
              multiline
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type='message'
            />
          )}
          rules={{ required: 'Please write a message :)' }}
        />
        <div>
          <Button
            type='submit'
            className={classes.submitBtn}
            variant='contained'
            color='primary'
          >
            Send
          </Button>
        </div>
      </form>
    </>
  );
}

export default Contact;
