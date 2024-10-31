const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const output = document.getElementById("result");

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleInput();
  }
});

checkBtn.addEventListener("click", () => {
  handleInput();
});

const handleInput = () => {
  const fullString = textInput.value.trim();

  if (!fullString) {
    alert("Please input a value");
  } else {
    const cleanString = fullString.toLowerCase().replace(/[^a-z0-9åäö]/g, "");

    const halfStringLength = Math.floor(cleanString.length / 2);
    updateResult(fullString, isPalindrome(cleanString, halfStringLength));
  }
};

const isPalindrome = (string, toIndex) => {
  for (let i = 0; i <= toIndex; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const updateResult = (string, result) => {
  output.textContent = `"${string}" is ${result ? "a" : "not a"} palindrome.`;
};
