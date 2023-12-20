const totp = require("totp-generator");

const token = totp("**************************");
console.log(token); // prints an 8-digit token