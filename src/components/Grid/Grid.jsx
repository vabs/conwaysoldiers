import React, {Component} from 'react';
import Row from '../Row/Row';
import './Grid.css';

class CellGrid extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      grid: this.intiliazeArray(20, 20),
      isAnyCellSelected: false,
      selectedPosition: {}
    }
  }

  intiliazeArray(x, y) {
    let rows = [];

    for(let posX=0; posX < x; posX++) {
      let columns = [];
      for(let posY=0; posY < y; posY++) {
        columns.push({
          canBeSelected: posX > 15 ? true : false,
          selected: false,
          canBeMovedTo: false
        })
      }
      rows.push(columns)
    }

    return rows;
  }

  move(tempGrid, to, from) {
    tempGrid[from.x][from.y] = Object.assign({}, 
      tempGrid[from.x][from.y],
      {
        selected: false,
        canBeSelected: false,
      });

    tempGrid[to.x][to.y] = Object.assign({}, 
      tempGrid[to.x][to.y],
      {
        selected: false,
        canBeSelected: true,
        canBeMovedTo: false
      });

    // remove block
    if(to.x === from.x) {
      if(to.y > from.y) {
        tempGrid[from.x][from.y + 1] = Object.assign({}, 
          tempGrid[from.x][from.y + 1],
          {
            selected: false,
            canBeSelected: false,
            canBeMovedTo: false
          });
      } else {
        tempGrid[from.x][from.y - 1] = Object.assign({}, 
          tempGrid[from.x][from.y - 1],
          {
            selected: false,
            canBeSelected: false,
            canBeMovedTo: false
          });
      }
    } else {
      if(to.x > from.x) {
        tempGrid[from.x + 1][from.y] = Object.assign({}, 
          tempGrid[from.x + 1][from.y],
          {
            selected: false,
            canBeSelected: false,
            canBeMovedTo: false
          });
      } else {
        tempGrid[from.x - 1][from.y] = Object.assign({}, 
          tempGrid[from.x - 1][from.y],
          {
            selected: false,
            canBeSelected: false,
            canBeMovedTo: false
          });
      }
    }
    return tempGrid;
  }

  highlightMoveCells(tempGrid, selected, highlight) {
    // check if can move left
    if(selected.x - 2 > 0 &&
      (tempGrid[selected.x-1][selected.y]).canBeSelected === true &&
       (tempGrid[selected.x-2][selected.y]).canBeSelected === false) {
      tempGrid[selected.x-2][selected.y] = Object.assign({}, 
        tempGrid[selected.x-2][selected.y],
        {canBeMovedTo: highlight});
      }

    // check if can move right
    if(selected.x + 2 < 20 && 
      (tempGrid[selected.x+1][selected.y]).canBeSelected === true &&
      (tempGrid[selected.x+2][selected.y]).canBeSelected === false) {
      tempGrid[selected.x+2][selected.y] = Object.assign({}, 
        tempGrid[selected.x+2][selected.y],
        {canBeMovedTo: highlight});
      }
    // check if can move up
    if(selected.y + 2 < 20 && 
      (tempGrid[selected.x][selected.y + 1]).canBeSelected === true && 
      (tempGrid[selected.x][selected.y + 2]).canBeSelected === false) {
      tempGrid[selected.x][selected.y + 2] = Object.assign({}, 
        tempGrid[selected.x][selected.y + 2],
        {canBeMovedTo: highlight});
      }
    // check if can move down
    if(selected.y - 2 > 0 && 
      (tempGrid[selected.x][selected.y - 1]).canBeSelected === true &&
      (tempGrid[selected.x][selected.y - 2]).canBeSelected === false) {
      tempGrid[selected.x][selected.y - 2] = Object.assign({}, 
        tempGrid[selected.x][selected.y - 2],
        {canBeMovedTo: highlight});
      }
    return tempGrid;
  }
    
  handleClick(e) {
    let tempGrid = this.state.grid;
    let isCellSelected = this.state.isAnyCellSelected;
    let selectedPosition = this.state.selectedPosition;
    if(!isCellSelected && e.props.canBeSelected) {
      tempGrid[e.props.posX][e.props.posY] = Object.assign({}, 
        tempGrid[e.props.posX][e.props.posY],
        {selected: true});
        isCellSelected = true;
        selectedPosition = {
          x: e.props.posX,
          y: e.props.posY,
        }
      tempGrid = this.highlightMoveCells(tempGrid, selectedPosition, true);
    } else {
      if(isCellSelected) {
        if(e.props.canBeMovedTo) {
          isCellSelected = false;
          tempGrid = this.move(tempGrid, {
            x: e.props.posX,
            y: e.props.posY
          },  selectedPosition);
          tempGrid = this.highlightMoveCells(tempGrid, selectedPosition, false);
        }
        else if(e.props.selected) {
          tempGrid[e.props.posX][e.props.posY] = Object.assign({}, 
            tempGrid[e.props.posX][e.props.posY],
            {selected: false});
          isCellSelected = false;
          tempGrid = this.highlightMoveCells(tempGrid, selectedPosition, false);
        }
      }  
    }
    
    this.setState({
      grid: tempGrid,
      isAnyCellSelected: isCellSelected,
      selectedPosition
    })
  }

  render() {
    const rows = []
    for(let index=0; index<this.props.x; index++) {
      rows.push(<Row 
        key={index} 
        columns={this.state.grid[index]} 
        handleClick={this.handleClick}
        number={index} />);
    }
    
    return (
      <div className="margin-5">
        {rows}
      </div>
    )
  }

}

export default CellGrid;