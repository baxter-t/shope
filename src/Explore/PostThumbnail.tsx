import { Card, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'


export type PostThumbnailProps = {
    postId: string;
    imageUrl: string;
    onClick: () => void;
}

const useStyles = makeStyles({
    root: {
        margin: 10,
        width: '288px',
        flexGrow:1,
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
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, []);

    return (
        <div onClick={props.onClick} className={classes.root}>
            <img src={props.imageUrl} className={classes.img}/>
        </div>
    )
}
