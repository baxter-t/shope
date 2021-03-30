import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import OutfitDisplay from './Post/OutfitDisplay';
import { Container } from '@material-ui/core';
import { PostThumbnail } from './Explore/PostThumbnail';
import Masonry from 'react-masonry-component';

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
      <Masonry>
        {
          <>
            <PostThumbnail
              imageUrl={"https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg"}
              postId={""}
              onClick={handleOpen} />

            <PostThumbnail
              imageUrl={"https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg"}
              postId={""}
              onClick={handleOpen} />

            <PostThumbnail
              imageUrl={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*"}
              postId={""}
              onClick={handleOpen} />

            <PostThumbnail
              imageUrl={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/holiday-party-outfits-1603217130.png?crop=0.468xw:0.930xh;0.511xw,0.0382xh&resize=640:*"}
              postId={""}
              onClick={handleOpen} />

            <PostThumbnail
              imageUrl={"https://trnds.co/wp-content/uploads/2019/12/Trench-coat-winter-outfits-2020-worn-by-jodielapetitefrenchi-885x1024.jpg"}
              postId={""}
              onClick={handleOpen} />

            <PostThumbnail
              imageUrl={"https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_30.jpg"}
              postId={""}
              onClick={handleOpen} />
          </>
        }
      </Masonry>

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