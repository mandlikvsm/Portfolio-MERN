import React from 'react';
import './ProjectCard.css';
import { Button, Typography } from '@mui/material';
import {Delete} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../../actions/user';


const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,
}) => {


    const dispatch = useDispatch();


    const deleteHandler =  async (id) => {
       // e.preventDefault();
   await dispatch(deleteProject(id));
       dispatch(getUser());
        

   };
  return (
      <>
          <a href={url} className="projectCard" target= "blank">
              <div>
                  <img src={projectImage} alt="project" />
                  <Typography variant="h5">{ projectTitle}</Typography>
              </div>
              <div>
                  <Typography variant="h4">About Project</Typography>
                  <Typography>{description}</Typography>
                  <Typography variant="h6">Tech Stack: {technologies }</Typography>
              </div>
          </a>
          
          {isAdmin && (
              <Button onClick={() => deleteHandler(id)}> <Delete/></Button>
          )}
          
      </>
  )
}

export default ProjectCard