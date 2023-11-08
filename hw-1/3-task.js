
const findNb = (m) => {
  const n = (-1 + Math.sqrt(1 + 8 * Math.sqrt(m))) / 2;
  return n > 0 && n === parseInt(n) ? n : -1;
}
