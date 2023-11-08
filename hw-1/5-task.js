
const highAndLow = (numbers) => {
    numbers = numbers.split(' ').map(Number)
    return `${Math.max.apply(null, numbers)} ${Math.min.apply(null, numbers)}`
  }  
  