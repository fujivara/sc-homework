
const solution = (number) => {
  return Array.from({ length: number - 1 }, (_, i) => i + 1)
              .filter((el) => el % 3 == 0 || el % 5 == 0)
              .reduce((sum, curr) => sum + curr, 0);
}
