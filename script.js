const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

// Function to convert number to Roman numeral
function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }

  return roman;
}

const verifyInteger = (userInput) => {
  // Checks if the number is an integer and within the allowed range
  if (userInput < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (!Number.isInteger(+userInput) || userInput > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999.";
  } else {
    // If input is valid, convert and display the Roman numeral
    output.textContent = convertToRoman(parseInt(userInput));
    output.style.display = "flex";
  }
};

numberInput.addEventListener("keydown", function (event) {
  // Check if the key pressed was 'Enter'
  if (event.key === "Enter") {
    verifyValidNumber(numberInput.value);
  }
});

// Click event for conversion button
convertBtn.addEventListener("click", function () {
  const userInput = numberInput.value;
  verifyValidNumber(userInput);
});

// Checks if a valid number
const verifyValidNumber = () => {
  if (!numberInput.value) {
    output.textContent = "Please enter a valid number";
    output.style.display = "flex";
  } else {
    verifyInteger(numberInput.value);
  }
};
