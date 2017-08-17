import { TOGGLE_CELL, SET_BOARD_SIZE } from '../constants'

export function toggleCell(row, col) {
    return {
        type: TOGGLE_CELL,
        row,
        col
    }
};

export function setBoardSize(boardSize) {
    return {
        type: SET_BOARD_SIZE,
        boardSize
    }
};
