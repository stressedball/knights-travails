'use strict';
// we store all the possible moves the knight can make
const moves = [[-1, 2], [-2, 1], [-2, -1], [-1, -2],
                [1, -2], [2, -1], [2, 1], [1, 2]];
const startPoint = [18, 0]; // start with an example
const target = [0, 7]; // first target example
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue([x, y]) {
        this.data = {
            x: x,
            y: y,
            visited: [],
        }
        this.queue.push(this.data);
    }
    getQueue() {
        return this.queue;
    }
    dequeue() {
        this.queue.splice(0, 1);
    }
    head() {
        return this.queue[0];
    }
    tail() {
        return this.queue[this.queue.length - 1];
    }
}
function knightMoves(start, target) {
    if (start[0] > 7 || start[1] > 7 
        || start[0] < 0 || start[1] < 0
        || target[0] > 7 || target[1] > 7 
        || target[0] < 0 || target[1] < 0) {
        return console.log('Please try again. \nMax value : 7 \nMin value : 0');
    }
    let path = findShortestPath(start, target);
    for (let el of path) {
        console.log(el)
    }
}
function findShortestPath(start, target) {
    let xS = start[0]; 
    let yS = start[1];
    let xT = target[0];
    let yT = target[1];
    let queue = new Queue();

    queue.enqueue([xS, yS]);

    while (queue.getQueue().length > 0) {
        let x = queue.head().x; 
        let y = queue.head().y;
        for (let i = 0; i < moves.length; i++) {
            let xNext = moves[i][0]; 
            let yNext = moves[i][1];
            let nextMove = getNextMove([x, y], [xNext, yNext]);
            if (nextMove === null) continue;
            if (checkVisited([x, y], queue.head().visited) === true) continue;

            let xCalc = nextMove[0]; let yCalc = nextMove[1];
            if (checkTarget([xCalc, yCalc], [xT, yT]) === true) {
                if (queue.head().visited.length === 0) return [x, y].concat([xCalc, yCalc]);
                let path = queue.head().visited;
                path.push([x, y]);
                path.push([xT, yT]);
                return path;
            }

            queue.enqueue([xCalc, yCalc]);
            if (queue.head().visited.length === 0) {
                queue.tail().visited.push([x, y]);
            } else {
                getVisited(queue.head().visited, queue.tail());
                queue.tail().visited.push([x, y])
            }
        }
        queue.dequeue();
    }
}
const getNextMove = ([xS, yS], [xNext, yNext]) => {
    let xCalc = xS + xNext; 
    let yCalc = yS + yNext;
    if (xCalc > 7 || yCalc > 7 || xCalc < 0 || yCalc < 0) return null;
    return [xCalc, yCalc];
}
const checkTarget = ([x, y], [xT, yT]) => {
    if (x === xT && y === yT) return true;
    return false;
}
const checkVisited = ([x, y], visited) => {
    for (let i = 0; i < visited.length; i++) {
        let xV = visited[i][0]; 
        let yV = visited[i][1];
        if (xV === x && yV === y) return true;
    }
    return false;
}
const getVisited = (array, object) => {
    for (let i = 0; i < array.length; i++) {
        let x = array[i][0];
        let y = array[i][1];
        object.visited.push([x, y]);
    }
}
knightMoves(startPoint, target);

