
// Excedes maximum call stack size on code wars but also works fine)
const hanoi1 = (disks) => {
  const data = {
    count: 0
  }
  buildTower(disks, data);
  return data.count;
};

const buildTower = (n, data) => {
  data.count++;
  if (n == 1) return;
  buildTower(n - 1, data);
  buildTower(n - 1, data);
}

// Proper version wich does not require using recursive call stack
const hanoi2 = (disks) => {
  return Math.pow(2, disks) - 1;
};
