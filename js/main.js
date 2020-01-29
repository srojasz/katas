'use strict';


// Instructions: The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task: Given a year, return the century it is in.


function century(year) {

  const centByYear = (Math.ceil(year / 100));

  return centByYear;
}

century(25);

// Instructions: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b. 

// If a value is present in b, all of its occurrences must be removed from the other

function array_diff(a, b) {

  const newArray = a.concat(b);

  return newArray.filter((item) => b.indexOf(item) === -1);

}