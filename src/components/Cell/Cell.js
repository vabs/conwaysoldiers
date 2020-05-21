import React, {Component} from 'react';
import './Cell.css';

class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posX: props.posX,
      posY: props.posY
    }

    this.cellClick = this.cellClick.bind(this);
  }

  cellClick() {
    // console.log(this);
    this.props.handleClick(this);
    // console.log(event.target);
    // if(this.state.canBeSelected) {
    //   this.setState(state => ({
    //     selected: !state.selected,
    //   }))
    // }
    // if(this.state.canBeSelected) {
    //   this.setState({
    //     selected: true,
    //     canBeSelected: true
    //   })
    // }
  }

  render() {
    return (
      <div 
        className={`cell 
            ${this.props.canBeSelected ? "select " : ""}
            ${this.props.selected ? "selected " : ""}
            ${this.props.canBeMovedTo ? "canBeMovedTo " : ""}
          `}
        onClick={() => this.cellClick()}
      >
      </div>
    )
  }

}

export default Cell;