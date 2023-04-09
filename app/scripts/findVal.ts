export function findVal(obj: any, keyToFind: string): boolean | string {
    if (obj[keyToFind]) return obj[keyToFind];

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            const value = findVal(obj[key], keyToFind);
            if (value) return value;
        }
    }
    return false;
}

const object = { photo: { progress: 20, value: { data: { array: 5 } } } };
console.log(findVal(object, "array"));