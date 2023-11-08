const largestRadialSum = (arr, d) => {
    const dist = arr.length / d;
    return Math.max(...Array.from({length: dist}, (_, i) =>
        Array.from({ length: Math.ceil((arr.length - i) / dist) }, (_, j) => arr[i + j * dist])
    ).map(node => node.reduce((acc, curr) => acc + curr, 0)));
}
