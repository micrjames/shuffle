# shuffle
An implementation of Fisher-Yates shuffle algorithm.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working on other projects. The use for creating this project came up so often that its creation was inevitable. Also, originally written as a coding exercise.

## Technologies Used

Originally written as a function in JavaScript, it has since been completely rewritten as one using Typescript.

## Features

* Shuffle the order of the elements of a provided array.
* The elements of the new array are guaranteed to be in a different order.

## Setup

Just import the class into your project.

## Usage

Create an array of numbers,
```
const array: number[] = [1, 2, 3, 4, 5];
```

Then, pass that array of numbers to the shuffle function.
```
const shuffledArray = shuffle(array);
```

Now, shuffledArray contains the array with the re-ordered values.

## Project Status

At this point, the code is viewed to be completed.
## Room for Improvement
The function is working with the full functionality intended, so it will only be improved with new language functionality or if there is need for a rewrite.
## Contact

Feel free to contact me @michaelrjamesjr on twitter.
