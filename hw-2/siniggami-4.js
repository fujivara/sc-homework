const unpackSausages = (truck) => {
    return truck ? Array.from(truck.map(val => val.filter(el => el.match(/^\[(.)\1{3}\]$/))).flat()
        .filter((el, i) => (i + 1) % 5 !== 0 && el).join('')
        .replace(/[\[\]]/gi, '')).join(' ') : "";
}
