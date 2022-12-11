const { range } = require("./range/range");

const shuffle = function(array) {
    for(let i = array.length-1; i > 0; i--) {
	    let j = Math.floor(Math.random() * (i+1));
	    
	    [array[i], array[j]] = [array[j], array[i]];
	}

    return array;
};

const array = [...range(81)];
console.log(array);
const shuffledArray = shuffle(array);
console.log(shuffledArray);

const slicedAndShuffledArray = shuffledArray.slice(0, 10); 
console.log(slicedAndShuffledArray);
