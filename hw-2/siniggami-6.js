const landPerimeter = (arr) => {
    return `Total land perimeter: ${arr.reduce((perimeter, row, indexRow) => {
        return perimeter + row.split('').reduce((rowPerimeter, cell, indexColl) => {
            if (cell === 'X') {
                rowPerimeter += 4;
                if (indexRow !== 0 && arr[indexRow - 1].at(indexColl) === 'X') {
                    rowPerimeter -= 2;
                }
                if (indexColl !== 0 && row[indexColl - 1] === 'X') {
                    rowPerimeter -= 2;
                }
            }
            return rowPerimeter;
        }, 0);
    }, 0)}`
}

