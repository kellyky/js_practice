// From darts exercise - exercism https://exercism.org/tracks/javascript/exercises/darts/


const score = (x, y) => {
  let points;
  let radius;

  if (radius < 1) {
    points = 10;
  } else if (radius >= 1 && radius < 5) {
    points = 5;
  } else if (radius >= 5 && radius < 10) {
    points = 1;
  } else {
    points = 0;
  }
  return points;

}

console.log(score(1, 15));
console.log(score(1, 1));
console.log(score(5, 5));
