import { Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import React from 'react';
import {FaRegSmileWink } from 'react-icons/fa';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = ({projects}) => {

    // const projects = [1,2,3];

  return (
      <div className='projects'>
          <Typography variant = "h3">
              Projects
              <AiOutlineProject />
          </Typography>

          <div className="projectWrapper">
              {projects.map((item, index) => (
                  <ProjectCard
                      key={item._id}
                  url={item.url}
                  projectImage={item.image.url}
                  projectTitle={item.title}
                  description={item.description}
                  technologies={item.techStack}
                  />
              )
                  
              )}
          </div>

          <Typography variant="h3" style = {{font:"100 1.2rem 'Ubuntu Mono'"}}>
              All The Project Shown Above Are Made By Me <FaRegSmileWink />
          </Typography>
    </div>
  )
}

export default Projects