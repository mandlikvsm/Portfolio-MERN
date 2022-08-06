import React, { useState,useEffect } from 'react';
import './Contact.css';
// import React from 'react'
import { Button, Typography } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { contactUs } from '../../actions/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const { message :UpdateMessage, error,loading } = useSelector((state) => state.update);

    const contactFormHandler = (e) => {
        e.preventDefault();
        dispatch(contactUs(name,email,message));
}



useEffect(() => {
    if (error) {
        toast.error(error);
        dispatch({ type: "CLEAR_ERROR" });

    }
    if (UpdateMessage) {
        toast.success(UpdateMessage);
        dispatch({ type: "CLEAR_MESSAGE" });

    }


}, [ error, UpdateMessage, dispatch,loading]);

  return (
      <div className='contact'>
          <div className="contactRightBar"></div>

          <div className="contactContainer">
              
              <form className="contactContainerForm" onSubmit={contactFormHandler}>
                  <Typography variant='h4'>Contact Us</Typography>
                  
                  <input required type="text" placeholder='Name' value={name} onChange= {(e) => setName(e.target.value)} />
                  <input required type="email" placeholder='Email' value={email} onChange= {(e) => setEmail(e.target.value)}  />

                  <textarea required placeholder='Message' cols="30" rows="10" value={message} onChange= {(e) => setMessage(e.target.value)} ></textarea>
                  <Button variant='contained' type='submit' disabled={loading}>Send </Button>
              </form>
              <ToastContainer
                      position="bottom-center"
                      autoClose={10000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      />
          </div>
    </div>
  )
}

export default Contact