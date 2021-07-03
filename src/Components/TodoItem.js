// import { ListItem } from '@material-ui/core';
import React , {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import "bootstrap/dist/css/bootstrap.min.css";
import ClearIcon from '@material-ui/icons/Clear';
// import { List } from '@material-ui/icons';
// import {makeStyles} from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//     button : {
//         margin: theme.spacing(1),
//         "&:hover $icon" : {
//             color : 'white',
//         }
//     },
//     icon : {
//         color : 'blue',
//     }
// }));

export default function TodoItem(props) {

    // const classes = useStyles();
    const [hover , setHover] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [line , setLine] = useState(false);
    const cutIt = () => {
        line ? setLine(false) : setLine(true) ;
    };

    const deleteIt = () => {
        setEmpty(true);
    }

    return (
        <div>
            {empty ? undefined : 
            (
                <ul>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius : '4px',
                    position : 'relative',
                    left : '-28px',
                    display : 'flex',
                    width : '500px',
                    maxWidth : '100%',
                    height : '70px',
                    padding : '-4px',
                    margin : '-10px',
                    overflow : 'hidden',
                    border : '2px solid black'
                }}>
                    <div onMouseEnter = {() => {setHover(true);}} onMouseLeave = {() => {setHover(false);}} onClick = {cutIt}><ClearIcon style = {{backgroundColor : hover ? "gray" : "white" , position : 'absolute', top : '20px' , left : '5px' }} /></div>
                  <li style = {{textDecoration : line ? 'line-through' : "none" , display : 'flex' , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center' ,position : 'relative', left : '35px'}}>{props.text}</li>  
                    <button
                        onClick = {deleteIt}
                        type = "button"
                        className='btn btn-outline-dark'
                        style = {{position : 'absolute' , left : '398px', top : '13px'}}
                    >
                        {<DeleteIcon/>}
                        Delete
                    </button>

                </div>
            </ul>
            )
            }
            
        </div>
    )
}
