import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import OutfitDisplay from './Post/OutfitDisplay';
import { Container } from '@material-ui/core';
import { PostThumbnail } from './Explore/PostThumbnail';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>

      <div style={{width: '350px'}}>
        <PostThumbnail 
          imageUrl={"https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg"} 
          postId={""} 
          onClick={handleOpen}/>

      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <OutfitDisplay />
      </Modal>
    </Container>
  );
}