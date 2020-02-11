/**** EXAMPLE #1 ****/

var passed = 3;

var addTo = function () {
    var inner = 2;
    return passed + inner;
};

console.log(addTo());

var passed = 4;

console.log(addTo());


/**** EXAMPLE #2 ****/

var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner;
    };

    return add;
};

var addThree = new addTo(3)(6);
var addFour = new addTo(4);

console.log(addThree);
console.log(addFour(1));