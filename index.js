'use strict';

// we store all the possible moves the knight can make
const possibleMoves = [[-1, 2], [-2, 1], [-2, -1], [-1, -2],
                [1, -2], [2, -1], [2, 1], [1, 2]];
const startPoint = [0, 0]; // start with an example
const target = [3, 3]; // first target example

class Tree {
    constructor(start) {
        this.root = buildTree(start);
    }
}
function knightMoves(start, end) {
    let tree = new Tree(start);
}
function buildTree([x, y]) {
    // get the next moves
    // put them in an array
    // put the array as child of the coordinates
    // problem 1 : start is an array and not an object
    let moves = getMoves([x, y]);
    // basic structure
    return;
}
const getMoves = ([x, y]) => {
    let arr = [];
    for (let move of possibleMoves) {
        let f_x = x + move[0]; let f_y = y + move[1];
        if (f_x > 7 || f_y > 7 || f_x < 0 || f_y < 0) continue;
        arr.push([f_x, f_y]);
    }
    return arr;
} 

knightMoves(startPoint, target);

