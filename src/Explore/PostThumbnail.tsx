import { Card, makeStyles } from '@material-ui/core';
import React from 'react';


type PostThumbnailProps = {
    postId: string;
    imageUrl: string;
    onClick: () => void;
}

const useStyles = makeStyles({
    img: {
        width: '100%',
        height: 'auto',
    }
});

export const PostThumbnail = (props: PostThumbnailProps) => {
    const classes = useStyles();

    return (
        <Card onClick={props.onClick}>
            <img src={props.imageUrl} className={classes.img}/>
        </Card>
    )
}
