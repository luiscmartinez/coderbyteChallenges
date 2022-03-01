// READ_ME.PNG for Challenge instructions

const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (res) => {
  res.setEncoding("utf8");
  let rawData = "";
  res.on("data", (chunk) => {
    rawData += chunk;
  });
  res.on("end", () => {
    const parseData = JSON.parse(rawData)
      .data.split(", ")
      .filter(
        (eli) => eli.includes("age") && Number(eli.replace(/\D/g, "")) >= 50
      ).length;

    console.log(tokenChallenge(parseData));

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
