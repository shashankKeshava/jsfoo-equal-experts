/*
	3: Moore Neighbourhood
	You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many chips are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.

	Example:
	countNeighbours([[1, 0, 0, 1, 0],
	                 [0, 1, 0, 0, 0],
	                 [0, 0, 1, 0, 1],
	                 [1, 0, 0, 0, 0],
	                 [0, 0, 1, 0, 0]], 1, 2) == 3
*/

export const countNeighbours = (data, i, j) => {
    let neighbour = 0;
    var rowLimit = data.length - 1;
    var columnLimit = data[0].length - 1;

    for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
        for (
            var y = Math.max(0, j - 1);
            y <= Math.min(j + 1, columnLimit);
            y++
        ) {
            if (x !== i || y !== j) {
                neighbour += data[x][y];
            }
        }
    }
    return neighbour;
};

/* countNeighbours(
    [
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    1,
    2
); */

/* 2, 2;

1, 1;
1, 2;
1, 3;

2, 1;
2, 3;

3, 1;
3, 2;
3, 3;
 */
