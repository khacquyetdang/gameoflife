import { START, STOP, TOGGLE_CELL, SET_BOARD_SIZE, CLEAR_BOARD, NEXT_GEN } from '../constants'

function createInitialBoard(boardSize) {
    var gridsTable = [];
    var board = [];


    for (var row = 0; row < boardSize; row = row + 1)
    {
        var rows = [];
        for (var col = 0; col < boardSize;  col = col + 1)
        {
            rows.push(false);
        }
        board.push(rows);
    }
    return board;
}

function computeNeighbors(board, row, col) {
    var neighorsAlive = 0;
    var rowStart = Math.max(row - 1, 0);
    var rowEnd = Math.min(row + 2, board.length);

    var colStart = Math.max(col - 1, 0);
    var colEnd = Math.min(col + 2, board[row].length);
    for (var rowCoard = rowStart; rowCoard < rowEnd; rowCoard = rowCoard + 1)
    {
        console.assert(rowCoard >= 0, "Must be positive");
        //console.log('Loop cell walk')
        for (var colCoard = colStart; colCoard < colEnd; colCoard = colCoard + 1)
        {
            if (!(colCoard === col && rowCoard === row) && board[rowCoard][colCoard])
            {
                neighorsAlive = neighorsAlive + 1;
            }
            //console.log("debug neighor walk : at :", row, col,
            //"neighbor test :", rowCoard, colCoard, " alive :",  board[rowCoard][colCoard], " count neighorsAlive : ", neighorsAlive);
        }
    }
    return neighorsAlive;
}


function computeNextGen(board) {
    var nextBoard =  createInitialBoard(board.length);
    var boardSize = nextBoard.length;
    for (var row = 0; row < boardSize; row = row + 1)
    {
        for (var col = 0; col < board[row].length;  col = col + 1)
        {
            // current cell is alive
            var neighborsCount = computeNeighbors(board, row, col);
            if (board[row][col] === true)
            {
                //console.log("neighborsCount ", row, col, neighborsCount);
                if (neighborsCount === 0 || neighborsCount === 1 || neighborsCount >= 4)
                {
                    nextBoard[row][col] = false;
                }
                else {
                    nextBoard[row][col] = true;
                }
            } else
            {
                if (neighborsCount === 3)
                {
                    nextBoard[row][col] = true;
                }
            }
        }
    }
    return nextBoard;
}

const defaultBoardSize = 62;
const initialState = {
    running : false,
    boardSize: defaultBoardSize,
    board: createInitialBoard(defaultBoardSize)
};

export default function gameOfLife(state = initialState, action) {
    switch (action.type) {
        case START: {
            return {
                ...state,
                running: true
            };
        }
        case STOP: {
            return {
                ...state,
                running: false
            };
        }
        case TOGGLE_CELL: {
            var newBoard = state.board.slice();
            newBoard[action.row][action.col] = !newBoard[action.row][action.col];
            return {
                ...state,
                board: newBoard
            };
        }
        case SET_BOARD_SIZE: {
            return {
                ...state,
                boardSize: action.boardSize,
                board: createInitialBoard(action.boardSize)
            }
        }
        case CLEAR_BOARD: {
            return {
                ...state,
                running: false,
                board: createInitialBoard(state.boardSize)
            }
        }
        case NEXT_GEN: {
            var newBoard = computeNextGen(state.board);
            var running = JSON.stringify(newBoard) !== JSON.stringify(state.board);
            return {
                ...state,
                running,
                board: newBoard
            };
        }
    }
    return state;
}
