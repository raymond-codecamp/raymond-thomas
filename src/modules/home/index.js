import React,{useRef, useEffect, useState, createRef} from 'react';
import {
    Grid,
    Typography,
    Avatar
} from '@material-ui/core';
import {TweenLite} from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import Navigation from 'components/navigation';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { useStyles } from './style';

const C = CSSPlugin;

function Home(props)
{
    const classes = useStyles();
    let cardRef = useRef();
    useEffect(() => {
        console.log(cardRef);
    
        // testimonial animation
        TweenLite.staggerFrom(cardRef.current, 1, {
          scale: 0,
        }, 0.3);
      }, []);
    
    return(
        <>
           <Grid
            container
            justify="flex-end"
            alignItems= "center"
            style={{
                minWidth: "20vh",
                minHeight: "20vh"
            }}
           >
               <Navigation/>
           </Grid>
           <Grid
            container 
            justify="space-evenly"
            alignItems="center"
            direction="row"
            style={{
                maxWidth: "150vh",
            }}
           >
               <img 
                src={require('assets/raymondthomas.png')} 
                alt= "Raymond Thomas"
                className={classes.avatar}
               />
               <Grid
                container
                className={classes.me}

               >
                   <Typography
                    variant= "body1"
                    className={classes.meText}
                    ref={element => {cardRef.current = element;}}
                   >
                       <FormatQuoteIcon color="primary" style={{rotate: "180deg",fontSize:35}}/> Hai, I am <strong>Raymond Thomas</strong>. I am delighted to be your host today. Come, take a walk with me I will introduce my self to you.<FormatQuoteIcon color="primary" style={{fontSize:35}}/>
                   </Typography>
               </Grid>
           </Grid>
           <Grid
            container 
            justify="flex-end"
            alignItems="center"
            direction="row"
            style={{
                maxWidth: "150vh",
            }}
           >
               <img alt="Art" src={require('assets/draw.png')}/>
           </Grid>
        </>
    );
}
export default Home;