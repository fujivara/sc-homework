const groupAnagrams = (words) => {
    const groups = {};
    words.forEach((word) => {
        const orderedWord = word.split('').sort().join('');
        !groups[orderedWord] ? groups[orderedWord] = [] : null;
        groups[orderedWord].push(word);
    });
    return Object.values(groups);
}
