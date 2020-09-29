import React from 'react'; 
import './Squares.css'
import DragImg from './DragImg'

function Squares(props){
    return(
        <div className='Squares'>
           {props.isImg? <DragImg/> : ''}
        </div>
    )
}

export default Squares; 