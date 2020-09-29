import React from 'react'; 
import ReactDOM from 'react-dom'
import './DragImg.css'; 
/*
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: true
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      console.log('je suis dans la methode handleclick AVANT que le state ne soit modifier ')
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      console.log('je suis dans la methode handleclick APRES que le state ne soit modifier ')
    }
  
    render() {
      console.log('Je suis dans la methode render')
      return (
        <button onClick={()=> this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
*/
class Test extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            ok: true, 
        }
        this.handleClick = this.handleClick.bind(this);

        
    }
    handleClick(){
        alert('avant le setstate de la methode handleclick');
        alert(this.state.ok);
        this.setState({ok: !this.state.ok});
        alert('APRES le setstate de la methode handleclick');
        alert(this.state.ok);
    }
    render(){
        return(
        <button onClick={()=> this.handleClick()}>{this.state.ok? 'Pas modifier' : 'Modifier'}</button>
        )
    }
}

class DragImg extends React.Component{

    constructor(props){
        super(props);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragOut = this.handleDragOut.bind(this);
        this.state= {
            classHold: 'DragImg',
            display : 'block',
        };
        
    }
    
  handleDrag(){
    console.log('click start')
    this.setState({classHold: this.state.classHold + ' ' + 'hovered'})
    setTimeout(()=>this.setState({display: 'none'}))
    
  }

  handleDragOut(){
  console.log('click end')
  this.setState({classHold: 'DragImg', display:'block'})
  }
    
    
    render(){
        
        
        return(
            <div style={{display: this.state.display}} draggable='true' onDragStart={()=> this.handleDrag()} onDragEnd={()=> this.handleDragOut()} className={this.state.classHold}>
                
            </div>
        )
    }
    
    
}

ReactDOM.render(
    <Test/>,
    document.getElementById('root_2')
)

export default DragImg; 