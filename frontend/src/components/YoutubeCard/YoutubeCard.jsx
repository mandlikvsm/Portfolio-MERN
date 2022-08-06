// import { Typography } from '@mui/material';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import "./YoutubeCard.css";
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux'
import { deleteYoutube, getUser } from '../../actions/user';


const YoutubeCard = ({
    url = "https://www.youtube.com/watch?v=bMknfKXIFA8&t=414s",
    title = "Title Here",
    image,
    isAdmin = false,
    id,
    

}) => {
    const dispatch = useDispatch();


     const deleteHandler = (id) => {
        // e.preventDefault();
         dispatch(deleteYoutube(id));
        dispatch(getUser());
         

    };
  return (
      <div className='youtubeCard'>
          <a href={url} target = "blank">
              <img src={image} alt="video not found" />
              <Typography>{title}</Typography>
          </a>

          {isAdmin && <Button
              style={{
                  margin: 'auto',
                  display: 'block',
                  color:'rgba(40,40,40,0.7)',
              }}
          onClick={()=> deleteHandler(id)}
          >
              <FaTrash />
            </Button>}
    </div>
  )
}

export default YoutubeCard