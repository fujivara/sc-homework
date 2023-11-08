
const isPrime = (p) => {
  if (p < 2 ) {
    return false;
  }
  
  let a = 5;

  if (p === 2 || p === 3) return true;
  else if (p % 2 === 0 || p % 3 === 0){
    return false;
  }

  while (a <= Math.sqrt(p)) {
    if (p % a === 0) {
      return false;
    } else {
      a += 2;
    }
  }

  return true;
}
