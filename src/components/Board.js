import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import './styles/Board.css';
import { toggleCell } from '../actions';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.renderTableRows = this.renderTableRows.bind(this);
        this.onCellClick = this.onCellClick.bind(this);
    }

    onCellClick(row, col) {
        Promise.resolve().then(this.props.toggleCell(row, col));
    }

    renderTableRows() {
        var numberRows = this.props.boardSize;
        var numberCols = this.props.boardSize;
        var { board } = this.props;
        var rows = [];
        var tableRows = [];

        for (var col = 0; col < numberCols;  col++)
        {
            rows.push(col);
        }
        for (var row = 0; row < numberRows; row++)
        {
            var tr = null;
            tableRows.push(
                <tr key={row}>
                    {
                        rows.map((col) => {
                            return (<td key={col+row}><Cell
                                cellClick={this.onCellClick}
                                row={row} col={col}
                                active={board[row][col]}
                                ></Cell></td>);
                        })
                    }
                </tr>
            );
        }
        var tby = null;
        tby = <tbody>
            {tableRows.map((obj, key) => {
                return (
                    obj
                )
            })}
        </tbody>
        return tby;
    }
    render() {

        return (
            <div className="Board">
                <table>
                    {this.renderTableRows()}
                </table>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps)
{
    return state;
}

export default connect(mapStateToProps, {toggleCell}) (Board);
