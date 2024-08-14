import { Random } from "./Random/Random";

export const shuffle = (array: number[]): number[] => {
    // shuffle is done in place
    const randNum = new Random(0);
    let j: number;
    for(let i = array.length-1; i > 0; i--) {
		randNum.maximum = i;
		j = randNum.integer;
	    
	    [array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
