function forLoop(array){
  for (let i = 1; i < 26; i++){
    array[i] = `I am ${i} strange loop${i === 1 ? '.' : 's.'}`;
  }
}

function whileLoop(n){
  while (n >= 0) {
    console.log(n--);
  }
  n === 0 ? console.log("done") : '';
}

function doWhileLoop(array){
  do {
    delete array[array.length - 1]
  } while (array.length > 0 || Math.random() >= 0.5)
}
