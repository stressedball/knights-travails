Make use of BDS to get the shortest path.


Fun story :

How should one tackle the problem?

First days of working on project, I constantly was thinking about making a tree full of nodes of possible moves.

The idea behind was to make all possible full traversals of chessboards while respecting the preceding traversed tiles.

In pseudo code :

    function buildTree([x, y], visited = []) 
        if (x > 7 || y > 7 || x < 0 || y < 0) return null;
        if (x || y has been visited) return null;

        make a new node;
        visited array to be updated by new coordinates;

        for (every move the knight can make)
            calculate x + move.x, y + move.y
            buildTree(calculatedX, calculatedY, visited)
            node.append(return of buildTree) // null in the end

        visited.pop() before returning from the stack 
        // we're going one node back so it shouldn't be visited
        return node

After a while, and many breakpoints, I realized I couldn't build a 8^64 tree...




