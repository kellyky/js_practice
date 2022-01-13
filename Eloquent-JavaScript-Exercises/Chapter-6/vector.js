/*
 *
 Write a class Vec that represents a vector in 2 space
 - [x] Takes x and y params; these are numbers
 - [x] saves to properties of the same name
 Give Vec 2 methods:
 - [] plus
 - [x] minus
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

  plus(another) {
    return new Vec(this.x + another.x, this.y + another.y)
  }

  minus (another) {
    return new Vec(this.x - another.x, this.y - another.y)
  }

  get length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
    return (this.x ** 2 + this.y ** 2) ^ 0.5;
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
