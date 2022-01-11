/*
 *
 Write a class Vec that represents a vector in 2 space
 - Takes x and y params; these are numbers
 - saves to properties of the same name
 Give Vec 2 methods:
 - plus
 - minus
 These should: 
  - take another vector as a param  
  - return a new vector that has the sum or difference of the two vectors' (this and the parameter) x and y vals
  Add getter property length to prodotype
  Should compute the length of vector - distance of point (x, y) and origin (0, 0)

*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }

  plus(x, y) {
    return x + y;

  }

  minus (x, y) {
    return x - y;

  }
}

const vector = new Vec();

console.log(vector);
console.log(vector.plus(1, 3));
console.log(vector.minus(50, 1));
