import React from 'react'; 
import './Board.css'; 
import Squares from './Squares';

class Board extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            mainImg: true,
            isImg: false,
        }
    }
   render(){
    return(
        <div className='Board'>
            <Squares isImg={true}/>
            <Squares isImg={false}/>
            <Squares isImg={false}/>
            <Squares isImg={false}/>
        </div>
    )
   }
    
}

export default Board; 