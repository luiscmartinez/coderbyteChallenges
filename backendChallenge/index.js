// READ_ME.PNG for Challenge instructions

const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (res) => {
  res.setEncoding("utf8");
  let rawData = "";
  res.on("data", (chunk) => {
    rawData += chunk;
  });
  res.on("end", () => {
    const MINIMUM_AGE = 50;
    const INDEX_VALUE = 1;
    // reducing to a single value
    const countOverMinimum = JSON.parse(rawData)
      .data.split(", ")
      .reduce((acc, cur) => {
        // Number() will evaluate to a number or "NaN"
        return Number(cur.split("=")[INDEX_VALUE]) > MINIMUM_AGE
          ? acc + 1 // count
          : acc; // don't count
      }, 0);

    console.log(tokenChallenge(countOverMinimum)); // result= 12X9iX6kXlrX8b

    function tokenChallenge(i) {
      const target = i + "9iw6kdlr48b";
      return target
        .split("")
        .map((e, index) => {
          const accountForIndexStartingAtZero = index + 1;
          // if at every 3rd spot
          if (accountForIndexStartingAtZero % 3 === 0) {
            return "X";
          }
          return e;
        })
        .join("");
    }
  });
});
