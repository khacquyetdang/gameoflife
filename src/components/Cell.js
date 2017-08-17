import React from 'react';

import './styles/Cell.css';

class Cell extends React.Component {
  render() {
      var cssCell="Cell";
    if (this.props.active)
    {
        cssCell = cssCell + " active";
    }
    return (
      <div className={cssCell}
          onClick={() => this.props.cellClick(this.props.row, this.props.col)}>
      </div>
    );
  }
}

export default Cell;
