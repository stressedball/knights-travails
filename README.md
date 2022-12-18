1/ what is the objective?

    Make an algorithm that finds the shortest path from a point A [x, y] to a point B [x, y]
    The moving object can move with the same behavior as a chess' knight, which can move as follows:
        Given a point A[0, 0] - a starting point - :
        Knight can move such as :
            Row move : -1 | -2 | -2 | -1 |  1 |  2 | 2 | 1
            Col move :  2 |  1 | -1 | -2 | -2 | -1 | 1 | 2
        So the knight can choose between 8 moves.

    In other terms we need to find the combination of unknown size to get the knight from the starting point to the target point.


2/ how should i go about it?

    What are the available informations?
    We have the path : ie the starting point and the target point.
    We know what moves are available for the object we're manipulating.

    The algo needs to deconstruct the path by respecting the moves available.



3/ how many parts / steps are needed ?

    So far I'm with a blank page.

    I need the constants : starting point and target point.
    I definitely need the current coordinates, so currentCoord should be a good name.

    How should the moves properties be implemented?

    Recursion?
        Base : if current coordinates === target point => return
        As long as current coordinates !== from target point repeat

    It is clear that we need to retain the values for paths :

        Let's imagine a starting point and a target point.
        [0, 0] and [3, 3]

        The algorithm needs to evaluate all the possible paths and return the shortest one.

        In no particular order, let's start from the combination [-1, 2]
        We can see that from the starting point [0, 0], this leads to [-1, 2] which doesn't respect the boundaries [0, 0] [7, 7]
        So first of all we can set boundaries :
            if (calculated X || calculated Y) < 0 => path is not exploitable.
            if (calculated X || calculated Y) > 63 => path is not exploitable

        For easier readability, let's look again at the knight's possible moves: 
            Row move : -1 | -2 | -2 | -1 |  1 |  2 | 2 | 1
            Col move :  2 |  1 | -1 | -2 | -2 | -1 | 1 | 2

        When starting from [0, 0], all moves with a negative value can be ignored

        So we leave the algo with only 2 choices : [2, 1] && [1, 2]

        Now, how should the algo take over?

        We can queue these 2 possible moves by storing them in an array.

        We then go through the array returning the future coordinates and validate them or not.


