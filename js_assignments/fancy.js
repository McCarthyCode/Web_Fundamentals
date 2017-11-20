function fancy(arr, symbol, reversed) {
    symbol = symbol || "->";
    reversed = reversed || false;
    if (reversed) {
        for (var i = arr.length-1; i >= 0; i--) {
            console.log(i + " " + symbol + " " + arr[i]);
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            console.log(i + " " + symbol + " " + arr[i]);
        }
    }
}

fancy(["James", "Jill", "Jane", "Jack"], "→", true);