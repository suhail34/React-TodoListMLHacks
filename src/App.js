import { makeStyles } from '@material-ui/core';
import React from 'react';
import Todos from './Components/Todos';
import image from './images/bg-desktop-light.jpg';

let useStyles = makeStyles({
  img : {
    position : 'absolute',
    zIndex : -1,
    width : '100vw',
    maxWidth : '100%',
    maxHeight : '100%',
    height : '300px'
  },

});

export default function App() {

  let classes = useStyles();

  return (
    <div>
      <img className = {classes.img} alt = 'Background' src = {image}/>
      <Todos title = {"My Todo List"}/>
      
    </div>
  );
}

    