function deepClone(obj) {
    let keys = Object.keys(obj);
    return keys.reduce((acc, item) => {
        if (typeof obj[item] === 'object') {
            if (Array.isArray(obj[item])) {
                return {
                    ...acc,
                    item: [...obj[item]]
                }
            }
            return {
                ...acc,
                item: deepClone(obj[item])
            }
        }
        return {
            ...acc,
            item: obj[item]
        }
    }, {});
}

let test = { a: [1, 2, 3] };
let clone = deepClone(test);
console.log(clone);