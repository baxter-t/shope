import { Card, makeStyles } from '@material-ui/core';
import React from 'react';


type PostThumbnailProps = {
    postId: string;
    imageUrl: string;
    onClick: () => void;
}

const useStyles = makeStyles({
    root: {
        margin: 10,
        width: '350px',
        borderRadius: 10
    },
    img: {
        width: '100%',
        height: 'auto',
        borderRadius: 10
    }
});

export const PostThumbnail = (props: PostThumbnailProps) => {
    const classes = useStyles();

    return (
        <div onClick={props.onClick} className={classes.root}>
            <img src={props.imageUrl} className={classes.img}/>
        </div>
    )
}
