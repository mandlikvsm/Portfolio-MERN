import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant="h5"> About Me</Typography>
                <Typography>
                    Hey,my name is Vishal Mandlik. I am Full-Stack Developer .
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>
                        Contact Us
                    </Typography>
                </Link>

                <a download href={require("../../data/Resume_v1.pdf")} className="footerContactBtn">
                    <Typography>
                        Resume
                    </Typography>
                </a>
            </div>

            <div>
                <Typography variant='h6'>Social Media</Typography>
                <a href="https://github.com/mandlikvsm" target="blank">
                    <BsGithub />
                </a>
                <a href="https://www.youtube.com/channel/UCxslAU9W3boYQiXR1Z5x-Hg" target="blank">
                    <BsYoutube />
                </a>
                <a href="https://www.linkedin.com/in/vishal-mandlik-64581047/" target="blank">
                    <BsLinkedin />
                </a>
                <a href="https://www.facebook.com/mandlikvs94/" target="blank">
                    <BsFacebook />
                </a>

                <a href="https://www.instagram.com/vishal_m94/" target="blank">
                    <BsInstagram />
                </a>
            </div>

        </div>
    )
}

export default Footer
