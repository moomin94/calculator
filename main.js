const input = document.getElementById("input");
const number = document.querySelectorAll(".buttons__numbers div");
const operator = document.querySelectorAll(".buttons__operators div");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
let resultDisplayed = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    // 변수에 현재 입력 문자열 및 문자열의 마지막 문자 저장 - 나중에 사용
    const currentString = input.innerText;
    const lastChar = currentString[currentString.length - 1];

    // 결과값이 input창에 나타나지 않았을 때 문자열 계속 추가
    if (resultDisplayed === false) {
      input.innerText += e.target.innerText;
    }
    // 결과값이 input창에 나타났는데 연산을 계속 추가하고 싶으면
    // 나타나는 결과값을 다시 false로 바꾸고 문자열 계속 추가
    else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      input.innerText += e.target.innerText;
    }
    // 결과값이 나타났고, 새로운 계산 하고 싶어서 숫자를 클릭했을 때
    // 나타는 결과값을 다시 false로 바꾸고 input창 리셋하고 문자열 추가
    else {
      resultDisplayed = false;
      input.innerText = "";
      input.innerText += e.target.innerText;
    }
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    // 변수에 현재 입력 문자열 및 문자열의 마지막 문자 저장 - 나중에 사용
    const currentString = input.innerText;
    const lastChar = currentString[currentString.length - 1];

    // 만약 마지막 문자가 연산자일 때
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      // newString 변수에
      const newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerText;
      input.innerText = newString;
    } else if (currentString.length === 0) {
      alert("enter a number first");
    } else {
      input.innerText += e.target.innerText;
    }
  });
}

if (result) {
  result.addEventListener("click", function () {
    const currentString = input.innerText;
    const lastChar = currentString[currentString.length - 1];

    if (currentString.length === 0) {
      alert("enter a number first");
    } else if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      const newString = currentString.substring(0, currentString.length - 1);
      input.innerText = newString;
    } else if (currentString.includes("×")) {
      const newString = currentString.replace("×", "*");
      input.innerText = "";
      input.innerText = eval(newString);
      resultDisplayed = true;
    } else if (currentString.includes("÷")) {
      const newString = currentString.replace("÷", "/");
      input.innerText = "";
      input.innerText = eval(newString);
      resultDisplayed = true;
    } else {
      input.innerText = "";
      input.innerText = eval(currentString);
      resultDisplayed = true;
    }
  });
}

if (clear) {
  clear.addEventListener("click", function () {
    resultDisplayed = false;
    input.innerText = "";
  });
}
