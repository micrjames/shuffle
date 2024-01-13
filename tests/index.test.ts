const { shuffle } = require("../shuffle");

describe("An implementation of Fischer-Yates shuffle algorithm.", () => {
   const numRows = 9;
   const numCols = 9;
   const array = Array.from({ length: numRows*numCols}, (_, i) => i);
   test("Create an array of sequences.", () => {
	  array.forEach((num, i) => {
		 expect(num).toBe(i);
	  });
   });
   test("Each element of the array is not at its previous position in the array.", () => {
	  const unshuffledArray = [...array];
	  const shuffledArray = shuffle(array);
	  expect(shuffledArray).not.toEqual(unshuffledArray);
   });
});
