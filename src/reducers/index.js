import { TOGGLE_CELL, SET_BOARD_SIZE } from '../constants'

function createInitialBoard(boardSize) {
    var gridsTable = [];
    var board = [];


    for (var row = 0; row < boardSize; row++)
    {
        var rows = [];
        for (var col = 0; col < boardSize;  col++)
        {
            rows.push(0);
        }
        board.push(rows);
    }
    return board;
}

const boardSize = 50;
const initialState = {
    boardSize: boardSize,
    board: createInitialBoard(boardSize)
};

export default function gameOfLife(state = initialState, action) {
    switch (action.type) {
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
                boardSize: action.boardSize,
                board: createInitialBoard(action.boardSize)
            }
        }
    }
    return state;
}
