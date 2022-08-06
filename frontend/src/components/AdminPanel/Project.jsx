import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  addProject, getUser } from '../../actions/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';





const Project = () => {

    const dispatch = useDispatch();

    const { message, error, loading } = useSelector((state) => state.update);
    const { message : LoginMessage } = useSelector((state) => state.login);

    const { user } = useSelector((state) => state.user);


    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();

   await dispatch(addProject(title, url, image, description, techStack));
        dispatch(getUser());
    };

   


    const handleImage = (e) => {
        const Reader = new FileReader();

        Reader.readAsDataURL(e.target.files[0]);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result);

            }
        }
    }


    useEffect(() => {
        if (error) {
            console.log(error);
            toast.error(error);
            dispatch({ type: "CLEAR_ERROR" });

        }
        if (LoginMessage) {
            toast.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
        if (message) {
            console.log(message);
            toast.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });

        }


    }, [error, message, dispatch, LoginMessage]);



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

                <form action="" onSubmit={submitHandler}>

                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}
                        className="adminPanelInputs" />

                    <input type="text" placeholder='Link' value={url} onChange={(e) => setUrl(e.target.value)}
                        className="adminPanelInputs" />

<input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}
                        className="adminPanelInputs" />
  <input type="text" placeholder='Technologies' value={techStack} onChange={(e) => setTechStack(e.target.value)}
                        className="adminPanelInputs" />


                    <input type="file"  onChange={handleImage}
                        className="adminPanelFileUpload" accept='image/*' />





                    <Link to="/account">
                        BACK<MdKeyboardBackspace />

                    </Link>






                    <Button type="submit" variant='contained' disabled={loading}>
                        ADD
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

                </form>

                <div className="adminPanelYoutubeVideos">
                    {user &&
                        user.projects &&
                        user.projects.map((item) => (
                            <ProjectCard 
                            id={item._id}
                            key={item._id}
                            url={item.url}
                            projectImage={item.image.url}
                            projectTitle={item.title}
                            
                            description={item.description}
                            technologies={item.techStack}
                            isAdmin = {true}
                                
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Project