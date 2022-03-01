function strChallenge(str) {
  function removeSpecialChars(e) {
    return e.replace(/[^a-zA-Z0-9 ]/g, "");
  }
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let pushValue = "";
    let shouldContinue = false;
    let continueNum = 1;
    if (str[i] === "<") {
      pushValue += str[i];
      shouldContinue = true;
    }
    while (shouldContinue) {
      pushValue += str[i + continueNum];
      continueNum += 1;
      if (str[i + continueNum] === ">") {
        const eli = pushValue + str[i + continueNum];
        shouldContinue = false;
        const isClosingEli = eli.includes("</");
        if (isClosingEli) {
          if (
            removeSpecialChars(stack[stack.length - 1]) ===
            removeSpecialChars(eli)
          ) {
            stack.pop();
            continue;
          }
          break;
        }

        stack.push(pushValue + str[i + continueNum]);
      }
    }
  }
  if (stack.length === 0) {
    return challengeToke();
  }
  function challengeToke(i) {
    const token = "9iw6kdlr48b";
    const target = i ? i + token : token;
    return target
      .split("")
      .map((e, index) => {
        const goodIndex = index + 1;
        if (goodIndex % 3 === 0) {
          console.log(e, "good inext");
          return "X";
        }
        return e;
      })
      .join("");
  }

  return challengeToke(removeSpecialChars(stack[stack.length - 1]));
}

console.log(
  strChallenge("<div>abc</div><p><em><i>test test test</b></em></p>")
);
console.log(strChallenge("<div><b><p>hello world</p></b></div>"));

console.log(strChallenge("<div><div><b></b></div></p>"));
