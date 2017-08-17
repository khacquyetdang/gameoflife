import React from 'react';

import './styles/Cell.css';

class Cell extends React.Component {
  render() {
    return (
      <div className="Cell"
          onClick={() => this.props.cellClick(this.props.row, this.props.col)}>
          <div> { '|' + this.props.row + ',' + this.props.col}</div>
      </div>
    );
  }
}

export default Cell;
