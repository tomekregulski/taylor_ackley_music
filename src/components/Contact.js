import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

init('user_sWNT4oROPiAoUGksmqFlD');

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4rem',
    marginRight: '20rem',
    marginLeft: '20rem',
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
  input: {
    width: '90%',
    padding: '1rem',
    color: 'black',
    backgroundColor: 'rgba(69,69,122,.4)',
    border: 'none',
    borderBottom: '1px solid black',
    transition: 'ease-in',
    marginBottom: '2rem',
    '&::placeholder': {
      color: 'black',
      opacity: '1',
    },
  },
  textarea: {
    width: '90%',
    padding: '1rem',
    color: 'black',
    backgroundColor: 'rgba(69,69,112,.4)',
    border: 'none',
    borderBottom: '1px solid black',
    transition: 'ease-in',
    resize: 'none',
    '&::placeholder': {
      color: 'black',
      opacity: '1',
    },
  },
}));

const Contact2 = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const form = document.querySelector('#contact-form');

    console.log(data);
    sendForm('contact_form', 'template_xu5gbwo', '#contact-form').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
      },
      (error) => {
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
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
      >
        <input
          type='text'
          name='name'
          variant='filled'
          placeholder='Name'
          maxLength='30'
          className={classes.input}
          ref={register({ required: true })}
        />
        <input
          type='text'
          name='email'
          variant='filled'
          placeholder='Email'
          maxLength='30'
          className={classes.input}
          ref={register({ required: true })}
        />
        <textarea
          type='text'
          name='message'
          variant='filled'
          placeholder='Message'
          maxLength='1500'
          className={classes.textarea}
          ref={register({ required: true })}
        />
        <Button type='submit' className={classes.submitBtn} variant='contained'>
          Send
        </Button>
      </form>
    </>
  );
};

export default Contact2;
