import { Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { login } from '../../actions/user';
//import Alert from '@mui/material/Alert'
// import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.login);
    const submitHandler = (e) => {
        e.preventDefault();
         dispatch(login(email, password));
       

};
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "CLEAR_ERROR" });

        }
        if (message) {
            toast.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });

        }


    }, [ error, message, dispatch]);

  return (
      <div className='login'>
          <div className="loginContainer">
              
              <form className="loginForm" onSubmit={submitHandler}>
                  <Typography variant="h4">
                      <p>A</p>
                      <p>D</p>
                      <p>M</p>
                      <p>I</p>
                      <p style={{ marginRight: "1vmax" }}> N </p>
                      <p>P</p>
                      <p>A</p>
                      <p>N</p>
                      <p>E</p>
                      <p>L</p>
                  </Typography>

                  <div>
                  <input required type="email" placeholder='Admin Email' value={email} onChange= {(e) => setEmail(e.target.value)} />
                  <input required type="password" placeholder='Admin Password' value={password} onChange= {(e) => setPassword(e.target.value)} />
                      <Button type="submit" variant='contained' disabled ={loading} >
                          
                      Login
                      </Button>  
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

              </form>
          </div>

    </div>
  )
}

export default Login