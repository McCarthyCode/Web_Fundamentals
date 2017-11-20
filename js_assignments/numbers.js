function numbersOnly(arr) {
    var out = [];
    for (var i=0; i<arr.length; i++) {
        if(typeof arr[i] === "number") {
            out.push(arr[i]);
        }
    }
    return out;
}

console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));