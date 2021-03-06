// Starting in the top left corner of a 2×2 grid, and only being
// able to move to the right and down, there are exactly 6 routes
// to the bottom right corner.
//
// How many such routes are there through a 20×20 grid?



var numRoutes = [];
//var getNumRoutes =
function getNumRoutes (sizeX, sizeY) {
    numRoutes[sizeX] = numRoutes[sizeX] || [];

    if (numRoutes[sizeX][sizeY]) {
        return numRoutes[sizeX][sizeY];
    }
    if (sizeX === 0 || sizeY === 0) return 1;

    //Consider moving to the right
    var routes = getNumRoutes(sizeX-1, sizeY);
    routes += getNumRoutes(sizeX, sizeY - 1);

    numRoutes[sizeX][sizeY] = routes;

    return routes;
};

console.log(getNumRoutes(2, 2));
console.log(getNumRoutes(20, 20));
console.log(numRoutes);

