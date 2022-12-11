const { range } = require("../range/range");
const { shuffle } = require("./shuffle");

const array = [...range(81)];
console.log(array);
try {
   const shuffledArray = shuffle(array);
   console.log(shuffledArray);

   const slicedAndShuffledArray = shuffledArray.slice(0, 10);
   console.log(slicedAndShuffledArray);
} catch(e) {
   console.error(e);
}

