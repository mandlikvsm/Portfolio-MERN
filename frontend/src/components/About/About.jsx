import { Typography } from '@mui/material'
import React from 'react'
import './About.css'

const About = ({about}) => {
  return (
      <div className='about'>
          
          <div className="aboutContainer">
              <Typography>
                 {about.quote}
              </Typography>

          </div>
          <div className="aboutContainer2">
              
              <div>
                  <img className='aboutAvtar' src={about.avatar.url} alt="vishal's" />
                  <Typography variant='h4' className='name'>{about.name}</Typography>
                  <Typography className='role'>{about.title}</Typography>
                  <Typography className='role'>{about.subtitle}</Typography>
              </div>
              <div>

                  <Typography className='description'>
                     {about.description}
                </Typography>
              </div>
          </div>

      </div>
  )
}

export default About