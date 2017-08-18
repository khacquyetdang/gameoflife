import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import './styles/Board.css';
import { toggleCell, nextGen } from '../actions';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {intervalId: null};
        this.renderTableRows = this.renderTableRows.bind(this);
        this.onCellClick = this.onCellClick.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
        this.startGame = this.startGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        console.log("componentWillReceiveProps props: ", this.props);
        if (this.props.running) {
            this.startGame();
        }
        else {
            this.stopGame();
        }
    }

    componentDidMount() {
        if (this.props.running) {
            this.startGame();
        }
    }
    componentWillUnmount() {
        if (this.props.running) {
            this.stopGame();
        }
    }

    startGame()
    {
        if (this.state.intervalId === null)
        {
            var intervalId = setInterval(this.gameLoop, 1000);
            // store intervalId in the state so it can be accessed later:
            this.setState({intervalId: intervalId});
        }
    }
    stopGame()
    {
        if (this.state.intervalId != null)
        {
            clearInterval(this.state.intervalId);
            this.setState({intervalId: null});
        }
    }


    gameLoop() {
        console.log("gameLoop");
        this.props.nextGen();
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

export default connect(mapStateToProps, {toggleCell, nextGen}) (Board);
