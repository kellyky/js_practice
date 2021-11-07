// From darts exercise - exercism https://exercism.org/tracks/javascript/exercises/darts/


const score = (x, y) => {
  let points;
  let radius = ((x ** 2) + (y ** 2)) ** (0.5);
  // I *think* we 


  if (radius < 1) {
    points = 10;
  } else if (radius >= 1 && radius < 5) {
    points = 5;
  } else if (radius >= 5 && radius < 10) {
    points = 1;
  } else {
    points = 0;
  }
  console.log(`Coords entered: ${x}, ${y}`);
  return points;

}

console.log(score(-0.1, -0.1 ));
console.log(score(1, 1));
console.log(score(5, 5));
console.log(score(9, -9));
