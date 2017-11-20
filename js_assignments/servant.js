var value = 0.01;
var reward = 0;

var day = 1;
var flagA = true;
var flagB = true;
while (reward < Infinity) {
    reward += value;

    if (day === 30) {
        console.log("On day 30, total reward is $" + reward);
    }
    if (reward > 10000 && flagA) {
        console.log("Reward surpassed $10,000 after", day, "days.");
        flagA = false;
    }
    if (reward > 1000000000 && flagB) {
        console.log("Reward surpassed $1,000,000,000 after", day, "days.");
        flagB = false;
    }

    value *= 2;
    day++;
}

console.log("Infinite money after", day - 1, "days.");
