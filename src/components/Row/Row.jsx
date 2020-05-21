import React, {Component} from 'react';
import './Row.css';
import Cell from '../Cell/Cell';


class Row extends Component {

  render() {
    const columns = [];
    for(let index =0; index < this.props.columns.length; index++) {
      columns.push(<Cell key={index} 
          canBeSelected={this.props.columns[index].canBeSelected}
          handleClick={this.props.handleClick}
          posX={this.props.number}
          posY={index} 
          selected={this.props.columns[index].selected}
          canBeMovedTo={this.props.columns[index].canBeMovedTo} />)
    }
    return (
      <div className="float-left">
        {columns}
      </div>
    )
  }
}

export default Row;