const fs = require("fs");

const listIngredients = require("./listIngredients.json")
const arr = [];
const data = { aaaa: "asdasd", asdasd: "dsad", asdasd: { aaa: "asdas", vasd: "asdas" } }

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

fs.readFile("./listIngredients.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    listIngredients.map((item)=> {arr.push(item.name)})

    console.log(arr)
})

