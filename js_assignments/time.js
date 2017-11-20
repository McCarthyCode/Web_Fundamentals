var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (HOUR === 12 && MINUTE === 0) {
    if (PERIOD === "AM") {
        console.log("It's midnight.");
    } else if (PERIOD === "PM") {
        console.log("It's noon.");
    }
} else if (MINUTE === 0) {
    if (PERIOD === "AM") {
        console.log("It's", HOUR, "o'clock in the morning.");
    } else if (PERIOD === "PM" && HOUR < 6) {
        console.log("It's", HOUR, "o'clock in the afternoon.");
    } else if (PERIOD === "PM" && HOUR >= 6) {
        console.log("It's", HOUR, "o'clock in the evening.");
    }
} else if (MINUTE === 30) {
    if (PERIOD === "AM") {
        console.log("It's half past", HOUR, "in the morning.");
    } else if (PERIOD === "PM" && HOUR < 6) {
        console.log("It's half past", HOUR, "in the afternoon.");
    } else if (PERIOD === "PM" && HOUR >= 6) {
        console.log("It's half past", HOUR, "in the evening.");
    }
} else {
    if (PERIOD === "AM") {
        console.log("It's", MINUTE, "past", HOUR, "in the morning.");
    } else if (PERIOD === "PM" && HOUR < 6) {
        console.log("It's", MINUTE, "past", HOUR, "in the afternoon.");
    } else if (PERIOD === "PM" && HOUR >= 6) {
        console.log("It's", MINUTE, "past", HOUR, "in the evening.");
    }
}