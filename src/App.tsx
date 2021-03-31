import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import OutfitDisplay from './Post/OutfitDisplay';
import { AppBar, Button, Container, Fade, IconButton, Toolbar } from '@material-ui/core';
import { PostThumbnail } from './Explore/PostThumbnail';
import Masonry from 'react-masonry-component';
import MenuIcon from '@material-ui/icons/Menu';
import { SearchForm } from './Explore/SearchForm';
import { NavBar } from './Explore/NavBar';

const useStyles = makeStyles({
  grid: {
    margin: 'auto',
    marginTop: 50
  },
  content: {
    marginTop: 130
  }
});

const urls = [
  "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
  "https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/denim-outfits-1560883870.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  "https://www.byrdie.com/thmb/kOwGkSrnC0yKCQF8j-xE0OMk_pY=/866x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__262586__first-date-outfit-ideas-262586-1531259419354-image.700x0c-2efa3bc0164a4af4abe88bfdacda7333.jpg",
  "https://cdn.cliqueinc.com/posts/275920/beige-outfits-275920-1547070932127-square.700x0c.jpg",
  "https://media.glamour.com/photos/5f06457e0f5e28e2c08e23af/master/pass/summer-outfit-ideas-promo-image.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  "https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_33.jpg",
  "https://trnds.co/wp-content/uploads/2019/12/Trench-coat-outfit-idea-for-winter-by-julie-sarinana-819x1024.jpg",
  "https://cdn.cliqueinc.com/posts/188378/easy-outfit-ideas-188378-1584742150544-image.700x0c.jpg",
  "https://static.onecms.io/wp-content/uploads/sites/14/2020/11/13/black-jeans-outfit-lead-2000.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F03%2F19%2Frainy20day20outfits209-2000.jpg",
  "https://www.lindsaysilberman.com/wp-content/uploads/2019/03/travel-outfit-1.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/UpJXKu-EyMTIhUjbX8fa3VHJ5Tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/810/n/1922564/b2d605de3ea44462_GettyImages-1152273877/i/Madison-Beer-Outfit.jpg",
  "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
  "https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/denim-outfits-1560883870.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  "https://www.byrdie.com/thmb/kOwGkSrnC0yKCQF8j-xE0OMk_pY=/866x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__262586__first-date-outfit-ideas-262586-1531259419354-image.700x0c-2efa3bc0164a4af4abe88bfdacda7333.jpg",
  "https://cdn.cliqueinc.com/posts/275920/beige-outfits-275920-1547070932127-square.700x0c.jpg",
  "https://media.glamour.com/photos/5f06457e0f5e28e2c08e23af/master/pass/summer-outfit-ideas-promo-image.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  "https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_33.jpg",
  "https://trnds.co/wp-content/uploads/2019/12/Trench-coat-outfit-idea-for-winter-by-julie-sarinana-819x1024.jpg",
  "https://cdn.cliqueinc.com/posts/188378/easy-outfit-ideas-188378-1584742150544-image.700x0c.jpg",
  "https://static.onecms.io/wp-content/uploads/sites/14/2020/11/13/black-jeans-outfit-lead-2000.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F03%2F19%2Frainy20day20outfits209-2000.jpg",
  "https://www.lindsaysilberman.com/wp-content/uploads/2019/03/travel-outfit-1.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/UpJXKu-EyMTIhUjbX8fa3VHJ5Tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/810/n/1922564/b2d605de3ea44462_GettyImages-1152273877/i/Madison-Beer-Outfit.jpg",
  "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
  "https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/denim-outfits-1560883870.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  "https://www.byrdie.com/thmb/kOwGkSrnC0yKCQF8j-xE0OMk_pY=/866x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__262586__first-date-outfit-ideas-262586-1531259419354-image.700x0c-2efa3bc0164a4af4abe88bfdacda7333.jpg",
  "https://cdn.cliqueinc.com/posts/275920/beige-outfits-275920-1547070932127-square.700x0c.jpg",
  "https://media.glamour.com/photos/5f06457e0f5e28e2c08e23af/master/pass/summer-outfit-ideas-promo-image.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  "https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_33.jpg",
  "https://trnds.co/wp-content/uploads/2019/12/Trench-coat-outfit-idea-for-winter-by-julie-sarinana-819x1024.jpg",
  "https://cdn.cliqueinc.com/posts/188378/easy-outfit-ideas-188378-1584742150544-image.700x0c.jpg",
  "https://static.onecms.io/wp-content/uploads/sites/14/2020/11/13/black-jeans-outfit-lead-2000.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F03%2F19%2Frainy20day20outfits209-2000.jpg",
  "https://www.lindsaysilberman.com/wp-content/uploads/2019/03/travel-outfit-1.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/UpJXKu-EyMTIhUjbX8fa3VHJ5Tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/810/n/1922564/b2d605de3ea44462_GettyImages-1152273877/i/Madison-Beer-Outfit.jpg",
  "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
  "https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/denim-outfits-1560883870.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  "https://www.byrdie.com/thmb/kOwGkSrnC0yKCQF8j-xE0OMk_pY=/866x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__262586__first-date-outfit-ideas-262586-1531259419354-image.700x0c-2efa3bc0164a4af4abe88bfdacda7333.jpg",
  "https://cdn.cliqueinc.com/posts/275920/beige-outfits-275920-1547070932127-square.700x0c.jpg",
  "https://media.glamour.com/photos/5f06457e0f5e28e2c08e23af/master/pass/summer-outfit-ideas-promo-image.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  "https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_33.jpg",
  "https://trnds.co/wp-content/uploads/2019/12/Trench-coat-outfit-idea-for-winter-by-julie-sarinana-819x1024.jpg",
  "https://cdn.cliqueinc.com/posts/188378/easy-outfit-ideas-188378-1584742150544-image.700x0c.jpg",
  "https://static.onecms.io/wp-content/uploads/sites/14/2020/11/13/black-jeans-outfit-lead-2000.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F03%2F19%2Frainy20day20outfits209-2000.jpg",
  "https://www.lindsaysilberman.com/wp-content/uploads/2019/03/travel-outfit-1.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/UpJXKu-EyMTIhUjbX8fa3VHJ5Tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/810/n/1922564/b2d605de3ea44462_GettyImages-1152273877/i/Madison-Beer-Outfit.jpg",
  "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
  "https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/denim-outfits-1560883870.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  "https://www.byrdie.com/thmb/kOwGkSrnC0yKCQF8j-xE0OMk_pY=/866x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__262586__first-date-outfit-ideas-262586-1531259419354-image.700x0c-2efa3bc0164a4af4abe88bfdacda7333.jpg",
  "https://cdn.cliqueinc.com/posts/275920/beige-outfits-275920-1547070932127-square.700x0c.jpg",
  "https://media.glamour.com/photos/5f06457e0f5e28e2c08e23af/master/pass/summer-outfit-ideas-promo-image.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  "https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_33.jpg",
  "https://trnds.co/wp-content/uploads/2019/12/Trench-coat-outfit-idea-for-winter-by-julie-sarinana-819x1024.jpg",
  "https://cdn.cliqueinc.com/posts/188378/easy-outfit-ideas-188378-1584742150544-image.700x0c.jpg",
  "https://static.onecms.io/wp-content/uploads/sites/14/2020/11/13/black-jeans-outfit-lead-2000.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F03%2F19%2Frainy20day20outfits209-2000.jpg",
  "https://www.lindsaysilberman.com/wp-content/uploads/2019/03/travel-outfit-1.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/UpJXKu-EyMTIhUjbX8fa3VHJ5Tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/810/n/1922564/b2d605de3ea44462_GettyImages-1152273877/i/Madison-Beer-Outfit.jpg",
  "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
  "https://thegirlfrompanama.com/wp-content/uploads/2018/06/Instagram-Photo-Tips-Pam-Hetlinger-summer-look-nyc-4.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hmg-prod-s3-amazonaws-12-1585634055.png?crop=1.00xw:0.668xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/denim-outfits-1560883870.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  "https://www.byrdie.com/thmb/kOwGkSrnC0yKCQF8j-xE0OMk_pY=/866x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__262586__first-date-outfit-ideas-262586-1531259419354-image.700x0c-2efa3bc0164a4af4abe88bfdacda7333.jpg",
  "https://cdn.cliqueinc.com/posts/275920/beige-outfits-275920-1547070932127-square.700x0c.jpg",
  "https://media.glamour.com/photos/5f06457e0f5e28e2c08e23af/master/pass/summer-outfit-ideas-promo-image.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  "https://static.fustany.com/images/en/photo/large_50_black_outfits_for_women_who_love_black_fustany_image_33.jpg",
  "https://trnds.co/wp-content/uploads/2019/12/Trench-coat-outfit-idea-for-winter-by-julie-sarinana-819x1024.jpg",
  "https://cdn.cliqueinc.com/posts/188378/easy-outfit-ideas-188378-1584742150544-image.700x0c.jpg",
  "https://static.onecms.io/wp-content/uploads/sites/14/2020/11/13/black-jeans-outfit-lead-2000.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F03%2F19%2Frainy20day20outfits209-2000.jpg",
  "https://www.lindsaysilberman.com/wp-content/uploads/2019/03/travel-outfit-1.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/UpJXKu-EyMTIhUjbX8fa3VHJ5Tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/810/n/1922564/b2d605de3ea44462_GettyImages-1152273877/i/Madison-Beer-Outfit.jpg",
];


export default function App() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderThumbnails = (urls: Array<string>) => {
    return urls.map(url => {

      return (<PostThumbnail
        imageUrl={url}
        postId={""}
        onClick={handleOpen} />
      )
    })
  }

  return (
    <>
      <NavBar />

      <div className={classes.content}>
        <Container>
          <SearchForm />
        </Container>

        <Container>
          <Masonry className={classes.grid}>
            {
              renderThumbnails(urls)
            }
          </Masonry>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            closeAfterTransition
          >
            <Fade in={open}>
              <OutfitDisplay />
            </Fade>
          </Modal>
        </Container>
      </div>
    </>
  );
}
