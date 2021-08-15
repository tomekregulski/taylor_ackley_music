// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { init, sendForm } from 'emailjs-com';
// import { BsArrowRight } from 'react-icons/bs';
// // import './contact.css';
// init('user_sWNT4oROPiAoUGksmqFlD');

// const Contact = ({ handleClose }) => {
//   const [statusMessage, setStatusMessage] = useState('Message');
//   const [contactNumber, setContactNumber] = useState('000000');

//   const generateContactNumber = () => {
//     const numStr = '000000' + ((Math.random() * 1000000) | 0);
//     setContactNumber(numStr.substring(numStr.length - 6));
//   };

//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data) => {
//     const statusMessage = document.querySelector('.status-message');
//     const form = document.querySelector('#contact-form');

//     // console.log(data);
//     generateContactNumber();
//     sendForm('contact_form', 'template_xu5gbwo', '#contact-form').then(
//       (response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         form.reset();
//         setStatusMessage('Message sent!');
//         statusMessage.className = 'status-message success';
//         setTimeout(() => (statusMessage.className = 'status-message'), 3000);
//         setTimeout(() => handleClose(), 2000);
//       },
//       (error) => {
//         console.log('FAILED...', error);
//         setStatusMessage('Failed to send message! Please try again later.');
//         statusMessage.className = 'status-message failure';
//         setTimeout(() => (statusMessage.className = 'status-message'), 5000);
//       }
//     );
//   };

//   return (
//     <div className='contact'>
//       <h1>Let's Talk</h1>
//       <p className='status-message'>{statusMessage}</p>

//       <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type='text'
//           name='user_name'
//           placeholder='Name'
//           maxLength='30'
//           aria-invalid={errors.user_name ? 'true' : 'false'}
//           ref={register({ required: true })}
//           style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
//         />
//         <input type='hidden' name='contact_number' value={contactNumber} />
//         {errors.user_name && errors.user_name.type === 'required' && (
//           <div role='alert'>Name is required</div>
//         )}
//         <input
//           type='text'
//           name='user_email'
//           placeholder='Email'
//           maxLength='30'
//           aria-invalid={errors.user_email ? 'true' : 'false'}
//           ref={register({ required: true })}
//           style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
//         />
//         {errors.user_email && errors.user_email.type === 'required' && (
//           <div role='alert'>Email is required</div>
//         )}
//         <textarea
//           type='text'
//           name='message'
//           placeholder='Message'
//           maxLength='1500'
//           aria-invalid={errors.message ? 'true' : 'false'}
//           ref={register({ required: true })}
//           style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
//         />
//         {errors.message && errors.message.type === 'required' && (
//           <div role='alert'>Message is required</div>
//         )}
//         {/* <button className='submit-btn' type='submit'>
//           Send <BsArrowRight />
//         </button> */}
//         <div className='submit'>
//           <input className='submit-btn' type='submit' value='Send' />
//           <BsArrowRight />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
// import styles from '../styles/ContactStyles';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
// import './contact.css';

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

const Contact = () => {
  const classes = useStyles();
  const [statusMessage, setStatusMessage] = useState('Message');
  const [contactNumber, setContactNumber] = useState('000000');

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const statusMessage = document.querySelector('.status-message');
    const form = document.querySelector('#contact-form');

    // console.log(data);
    generateContactNumber();
    sendForm('contact_form', 'template_xu5gbwo', '#contact-form').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage('Message sent!');
        // statusMessage.className = 'status-message success';
        // setTimeout(() => (statusMessage.className = 'status-message'), 3000);
        // setTimeout(() => handleClose(), 2000);
      },
      (error) => {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message! Please try again later.');
        // statusMessage.className = 'status-message failure';
        // setTimeout(() => (statusMessage.className = 'status-message'), 5000);
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
        className={classes.root}
      >
        <TextField
          type='text'
          name='name'
          variant='filled'
          placeholder='Name'
          maxLength='30'
          ref={register({ required: true })}
        />
        <TextField
          type='text'
          name='email'
          variant='filled'
          placeholder='Email'
          maxLength='30'
          ref={register({ required: true })}
        />
        <TextField
          type='text'
          name='message'
          variant='filled'
          multiline
          placeholder='Message'
          maxLength='1500'
          ref={register({ required: true })}
        />
        <Button
          type='submit'
          className={classes.submitBtn}
          variant='contained'
          color='primary'
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default Contact;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '4rem',
//     padding: theme.spacing(2),

//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '300px',
//     },
//     '& .MuiButtonBase-root': {
//       margin: theme.spacing(2),
//     },
//   },
//   heading: {
//     marginTop: '6rem',
//     textAlign: 'center',
//   },
//   submitBtn: {
//     animation: '$moveInBottom 5000ms',
//     background: 'transparent',
//     border: '2px solid #17D0FF',
//     color: 'black',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontWeight: '400',
//     transition: '.7s',
//     '&:hover': {
//       transform: 'translateY(-3px)',
//       background: 'transparent',
//       boxShadow: '0 0.3rem 0.2rem rgba(0, 0, 0, 0.256)',
//       transition: '.7s',
//     },
//     '&active': {
//       transform: 'translateY(-1px)',
//       boxShadow: '0 0.2rem 0.1rem rgba(0, 0, 0, 0.256)',
//       transition: '0.4s',
//     },
//   },
// }));

// function Contact({ handleClose }) {
//   const classes = useStyles();
//   const { register, handleSubmit, control } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // const form = document.querySelector('#contact-form');
//     sendForm('contact_form', 'template_xu5gbwo', '#contact-form').then(
//       function (response) {
//         console.log('SUCCESS!', response.status, response.text);
//         // form.reset();
//       },
//       function (error) {
//         console.log('FAILED...', error);
//       }
//     );
//   };

//   return (
//     <>
//       <div className={classes.heading}>
//         <h2>
//           I'd love to hear from you! Please use the form below to get in touch.
//         </h2>
//       </div>
//       <form
//         className={classes.root}
//         id='contact-form'
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <Controller
//           name='name'
//           control={control}
//           defaultValue=''
//           render={({ field: { onChange, value }, fieldState: { error } }) => (
//             <TextField
//               label='Name'
//               variant='filled'
//               value={value}
//               onChange={onChange}
//               error={!!error}
//               helperText={error ? error.message : null}
//             />
//           )}
//           rules={{ required: 'Name required' }}
//           {...register('name', { required: true })}
//         />
//         <Controller
//           name='email'
//           control={control}
//           defaultValue=''
//           render={({ field: { onChange, value }, fieldState: { error } }) => (
//             <TextField
//               label='Email'
//               variant='filled'
//               value={value}
//               onChange={onChange}
//               error={!!error}
//               helperText={error ? error.message : null}
//               type='email'
//             />
//           )}
//           rules={{ required: 'Email required' }}
//           {...register('email', { required: true })}
//         />
//         <Controller
//           name='message'
//           control={control}
//           defaultValue=''
//           render={({ field: { onChange, value }, fieldState: { error } }) => (
//             <TextField
//               label='Message'
//               variant='filled'
//               multiline
//               value={value}
//               onChange={onChange}
//               error={!!error}
//               helperText={error ? error.message : null}
//               type='message'
//             />
//           )}
//           rules={{ required: 'Please write a message :)' }}
//           {...register('message', { required: true })}
//         />
//         <div>
//           <Button
//             type='submit'
//             className={classes.submitBtn}
//             variant='contained'
//             color='primary'
//           >
//             Send
//           </Button>
//         </div>
//       </form>
//     </>
//   );
// // }

// import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { useForm } from 'react-hook-form';
// import { init, sendForm } from 'emailjs-com';

// init('user_sWNT4oROPiAoUGksmqFlD');

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   display: 'flex',
//   //   flexDirection: 'column',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   marginTop: '4rem',
//   //   padding: theme.spacing(2),

//   //   '& .MuiTextField-root': {
//   //     margin: theme.spacing(1),
//   //     width: '300px',
//   //   },
//   //   '& .MuiButtonBase-root': {
//   //     margin: theme.spacing(2),
//   //   },
//   // },
//   heading: {
//     marginTop: '6rem',
//     textAlign: 'center',
//   },
//   submitBtn: {
//     animation: '$moveInBottom 5000ms',
//     background: 'transparent',
//     border: '2px solid #17D0FF',
//     color: 'black',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontWeight: '400',
//     transition: '.7s',
//     '&:hover': {
//       transform: 'translateY(-3px)',
//       background: 'transparent',
//       boxShadow: '0 0.3rem 0.2rem rgba(0, 0, 0, 0.256)',
//       transition: '.7s',
//     },
//     '&active': {
//       transform: 'translateY(-1px)',
//       boxShadow: '0 0.2rem 0.1rem rgba(0, 0, 0, 0.256)',
//       transition: '0.4s',
//     },
//   },
// }));

// const Contact = () => {
//   const classes = useStyles();

//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     const form = document.querySelector('#contact-form');

//     console.log(data);
//     sendForm('contact_form', 'template_xu5gbwo', '#contact-form').then(
//       (response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         form.reset();
//       },
//       (error) => {
//         console.log('FAILED...', error);
//       }
//     );
//   };

//   return (
//     <>
//       <div className={classes.heading}>
//         <h2>
//           I'd love to hear from you! Please use the form below to get in touch.
//         </h2>
//       </div>

//       <form
//         id='contact-form'
//         onSubmit={handleSubmit(onSubmit)}
//         // className={classes.root}
//       >
//         <TextField
//           type='text'
//           name='name'
//           variant='filled'
//           placeholder='Name'
//           maxLength='30'
//           ref={register({ required: true })}
//         />
//         {/* <input
//           type='text'
//           name='name'
//           variant='filled'
//           placeholder='Name'
//           maxLength='30'
//           ref={register({ required: true })}
//         /> */}
//         <TextField
//           type='text'
//           name='email'
//           variant='filled'
//           placeholder='Email'
//           maxLength='30'
//           ref={register({ required: true })}
//         />
//         {/* <input
//           type='text'
//           name='email'
//           variant='filled'
//           placeholder='Email'
//           maxLength='30'
//           ref={register({ required: true })}
//         /> */}
//         <TextField
//           type='text'
//           name='message'
//           variant='filled'
//           multiline
//           placeholder='Message'
//           maxLength='1500'
//           ref={register({ required: true })}
//         />
//         {/* <textarea
//           type='text'
//           name='message'
//           variant='filled'
//           // multiline
//           placeholder='Message'
//           maxLength='1500'
//           ref={register({ required: true })}
//         /> */}
//         <Button
//           type='submit'
//           className={classes.submitBtn}
//           variant='contained'
//           color='primary'
//         >
//           Send
//         </Button>
//       </form>
//     </>
//   );
// };

// export default Contact;
