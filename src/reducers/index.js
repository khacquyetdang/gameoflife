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
    return state;
}
