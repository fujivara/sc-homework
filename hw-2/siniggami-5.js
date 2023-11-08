function getRootProperty(object, val, fullPath = []) {
    for (const [key] of Object.entries(object)) {
        const path = fullPath.concat(key);
        if (typeof object[key] === 'object') {
            const res = getRootProperty(object[key], val, path);
            if (res) {
                return res;
            }
        } else if (object.includes(val)) {
            return fullPath[0];
        }
    }
    return null;
}
