import React from 'react';

import './styles/Cell.css';

class Cell extends React.Component {
    render() {
        var cellStyle = {
            width: 6,
            height: 6,
        };
        if (this.props.boardSize > 100) {
            cellStyle = {
                width: 4,
                height: 4,
            };
        }
        var cssCell="Cell";
        if (this.props.active)
        {
            cssCell = cssCell + " active";
        }
        return (
            <div className={cssCell}
                style={cellStyle}
                onClick={() => this.props.cellClick(this.props.row, this.props.col)}>
            </div>
        );
    }
}

export default Cell;
