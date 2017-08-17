import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import './styles/Board.css';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.renderTableRows = this.renderTableRows.bind(this);
        this.onCellClick = this.onCellClick.bind(this);
    }

    onCellClick(row, col) {
        console.log("onCellClick %d %d", row, col);
    }

    renderTableRows() {
        var numberRows = this.props.boardSize;
        var numberCols = this.props.boardSize;
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
    console.log("board mapStateToProps");
    console.log(state);
    return state;
}

export default connect(mapStateToProps, null) (Board);
