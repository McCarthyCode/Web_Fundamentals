function slots(num) {
    while (num > 0) {
        if(Math.floor(Math.random()*101) === 100) {
            num += Math.floor(Math.random() * 51) + 50;
            break;
        }
        num--;
    }
    return num;
}

console.log(slots(100));