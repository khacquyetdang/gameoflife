import { TOGGLE_CELL, SET_BOARD_SIZE, NEXT_GEN, CLEAR_BOARD } from '../constants'

export function nextGen() {
    return {
        type: NEXT_GEN,
    }
};


export function toggleCell(row, col) {
    return {
        type: TOGGLE_CELL,
        row,
        col
    }
};

export function clearBoard() {
    return {
        type: CLEAR_BOARD,
    }
};
export function setBoardSize(boardSize) {
    return {
        type: SET_BOARD_SIZE,
        boardSize
    }
};
