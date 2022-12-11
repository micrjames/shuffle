const { range } = require("../range/range");
const { shuffle } = require("./shuffle");
const { Matrix } = require("../Matrix/Matrix");

const numRows = 9;
const numCols = 9;
const array = [...range(81)];
console.log(array);
const shuffledArray = shuffle(array);
console.log(shuffledArray);

const slicedAndShuffledArray = shuffledArray.slice(0, 10);
console.log(slicedAndShuffledArray);
