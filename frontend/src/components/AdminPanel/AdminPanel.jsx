import React, { useState, useEffect } from 'react';
import "./AdminPanel.css";
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUser } from '../../actions/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AdminPanel = () => {

    const dispatch = useDispatch();
    const { message: LoginMessage } = useSelector((state) => state.login);
    const { message, error, loading } = useSelector((state) => state.update);
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    const [skills, setSkills] = useState({});
    const [about, setAbout] = useState({});




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser(name, email, password, skills, about));
        
        console.log(name, email, password, skills, about);


    };

    const logoutHandler = () => {
        
        dispatch(logout());
    };
 

    const handleAboutImage = (e) => {
        const Reader = new FileReader();

        Reader.readAsDataURL(e.target.files[0]);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAbout({...about,  avatar: Reader.result });

            }
        }
    }

    const handleImage = (e, value) => {
        const Reader = new FileReader();

        Reader.readAsDataURL(e.target.files[0]);

        Reader.onload = () => {
            if (Reader.readyState === 2) {

                if (value === 1) {
                    setSkills({...skills,  image1: Reader.result });
                    
                }

                if (value === 2) {
                    setSkills({...skills,  image2: Reader.result });
                    
                }
                if (value === 3) {
                    setSkills({...skills,  image3: Reader.result });
                    
                }
                if (value === 4) {
                    setSkills({...skills,  image4: Reader.result });
                    
                }

                if (value === 5) {
                    setSkills({...skills,  image5: Reader.result });
                    
                }
                if (value === 6) {
                    setSkills({...skills,  image6: Reader.result });
                    
                }
            }

            }

               

            }
        
    
            useEffect(() => {
                if (error) {
                    toast.error(error);
                    dispatch({ type: "CLEAR_ERROR" });
        
                }
                if (message) {
                    toast.success(message);
                    dispatch({ type: "CLEAR_MESSAGE" });
        
                }
                if (LoginMessage) {
                    toast.success(LoginMessage);
                    dispatch({ type: "CLEAR_MESSAGE" });
        
                }
        
            }, [ error, message, dispatch, LoginMessage]);
        



    return (

        <div className="adminPanel">
            <div className="adminPanelContainer">
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

                <form  onSubmit={submitHandler}>

                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}
                        className="adminPanelInputs" />

                    <input  type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                        className="adminPanelInputs" />

                    <input  type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className="adminPanelInputs" />


                    <div className="adminPanelSkills">

                        <div>
                            <Typography>
                                SKILL 1
                            </Typography>

                            <input type="file" className='adminPanelFileUpload' onChange={(e) => handleImage(e, 1)}
                                accept="image/*"
                            />
                        </div>
                  

                    <div>
                        <Typography>
                            SKILL 2
                        </Typography>

                        <input type="file" className='adminPanelFileUpload' onChange={(e) => handleImage(e, 2)}
                            accept="image/*" />
                    </div>

                  
                        <div>
                        <Typography>
                            SKILL 3
                        </Typography>

                        <input type="file" className='adminPanelFileUpload' onChange={(e) => handleImage(e, 3)}
                            accept="image/*" />
                        </div>
                       
                       
                        <div>
                        <Typography>
                            SKILL 4
                        </Typography>

                        <input type="file" className='adminPanelFileUpload' onChange={(e) => handleImage(e, 4)}
                            accept="image/*" />
                        </div>
                    
                        <div>
                        <Typography>
                            SKILL 5
                        </Typography>

                        <input type="file" className='adminPanelFileUpload' onChange={(e) => handleImage(e, 5)}
                            accept="image/*" />
                        </div>
                    
                    
                        <div>
                        <Typography>
                            SKILL 6
                        </Typography>

                        <input type="file" className='adminPanelFileUpload' onChange={(e) => handleImage(e, 6)}
                            accept="image/*" />
                        </div>
                        
                    </div>
                    
                    <div className="adminPanelAbout">
                        <fieldset>  
                            <legend>About</legend>
                            <input type="text" placeholder='Name' value={about.name} onChange={(e) => setAbout({ ...about, name: e.target.value })}
                                className="adminPanelInputs" />
                            
                            <input type="text" placeholder='Title' value={about.title} onChange={(e) => setAbout({ ...about, title: e.target.value })}
                        className="adminPanelInputs" />

                            
                    <input type="text" placeholder='subtitle' value={about.subtitle} onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
                        className="adminPanelInputs" />

                            
                    <input type="text" placeholder='description' value={about.description} onChange={(e) => setAbout({ ...about, description: e.target.value })}
                        className="adminPanelInputs" />

                            
                    <input type="text" placeholder='Quote' value={about.quote} onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                        className="adminPanelInputs" />

                            
                    <input type="file" placeholder='Choose Avatar'  onChange={handleAboutImage}
                        className="adminPanelFileUpload"  accept='image/*'/>


                    </fieldset>


                    </div>

                    <Link to="/admin/timeline">
                        TimeLine<MdTimeline />

                    </Link>

                    
                    <Link to="/admin/youtube">
                        TimeLine<FaYoutube />
                        
                    </Link>
                    <Link to="/admin/project">
                        TimeLine<AiOutlineProject />
                        
                    </Link>



                    <Button type="submit" variant='contained' disabled={loading}>
                        Update 
                        </Button>

                </form>
                
                <Button variant="contained" color="error"
                    style={{ display: "block", margin: "4vmax auto" }}
                onClick={logoutHandler}>Logout</Button>
                
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
      </div >
 
    )
    
}

export default AdminPanel