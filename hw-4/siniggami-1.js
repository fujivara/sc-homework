function VigenereCipher(key, abc) {
  this.encode = function (str) {
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < str.length; i++) {
      if (keyIndex === key.length) {
        keyIndex = 0;
      }

      if (!abc.includes(str.at(i))) {
        result += str.at(i);
      }
      else {
        const row = abc.indexOf(str.at(i));
        const col = abc.indexOf(key.at(keyIndex));
        let [start, end] = [abc.slice(0, row), abc.slice(row)];
        const shiftedAlpha = end + start;
        result += shiftedAlpha.at(col);
      }
      keyIndex++;
    }
    return result;
  };

  this.decode = function (str) {
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < str.length; i++) {
      if (keyIndex === key.length) {
        keyIndex = 0;
      }

      if (!abc.includes(str.at(i))) {
        result += str.at(i);
      }
      else {
        const row = abc.indexOf(key.at(keyIndex));
        let [start, end] = [abc.slice(0, row), abc.slice(row)];
        const shiftedAlpha = end + start;
        const cipher = shiftedAlpha.indexOf(str.at(i));
        result += abc.at(cipher);
      }
      keyIndex++;
    }
    return result;
  };
}


