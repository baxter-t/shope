import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { FaInstagram, FaTshirt } from 'react-icons/fa';
import { GiArmoredPants, GiRunningShoe } from 'react-icons/gi'
import { Garment, ItemType, SocialType } from '../shared/ResponseTypes';

const getTypeIcon = (itemType: ItemType) => {
    switch(itemType) {
        case ItemType.Top: {
            return (<FaTshirt style={{fontSize: 30}}/>)
        }
        case ItemType.Pants: {
            return (<GiArmoredPants style={{fontSize: 30}}/>)
        }
        case ItemType.Shoes: {
            return (<GiRunningShoe style={{fontSize: 30}}/>)
        }
    }
}

export const ItemDisplay = (props: {item: Garment}) => {

    return (
        <Grid container direction="column" justify="center" alignItems="stretch">
            <Grid item xs>
                {getTypeIcon(props.item.itemType)}
                <p>{props.item.name}</p>
                <p>Size: {props.item.size}</p>
                {props.item.coupon ? <p>Coupon: {props.item.coupon}</p>: <></>}
                <Button href={props.item.shopLink}>Shop Now</Button>
            </Grid>
        </Grid>
    )
}