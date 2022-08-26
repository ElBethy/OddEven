const myArray = [-5,-8,1,7,2,-9,5,4];
let temp = 0;

myArray.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

//.....