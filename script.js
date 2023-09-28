const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("input", (e) => {
  //   const selectedColor = e.target.value;
  document.body.style.backgroundColor = e.target.value;
});

const quotes = [
  "Waaagh - Orks",
  "Waaagh - Orks",
  "For the Emperor - Space Marines",
  "Death to the false god - Chaos Space Marines",
];

const quoteBtn = document.getElementById("quote-btn");

quoteBtn.addEventListener("click", () => {
  const quoteTxt = document.getElementById("quote-text");
  const randomNum = Math.floor(Math.random() * quotes.length + 1);

  const randomQuote = quotes[randomNum];
  quoteTxt.textContent = randomQuote;
});

const textArea = document.getElementById("textarea");

textArea.addEventListener("keyup", (e) => {
  const characterCountText = document.getElementById("character-count");
  characterCountText.textContent = e.target.value.length;
});

const palinedromeBtn = document.getElementById("palindrome-btn");

palinedromeBtn.addEventListener("click", () => {
  const palindromeInput = document.getElementById("palindrome-input");
  const palindromeResult = document.getElementById("palindrome-result");
  const inputWord = palindromeInput.value;

  if (ifPalindrome(inputWord)) {
    palindromeResult.textContent = `${inputWord} is a palindrome`;
  } else {
    palindromeResult.textContent = `${inputWord} is not a palinedrome`;
  }
});

function ifPalindrome(input) {
  const inputWord = input.toLowerCase().replace(/[^a-z]/g, "");

  const reversedWord = [...inputWord].reverse().join("");
  return inputWord === reversedWord;
}

const anagramBtn = document.getElementById("anagram-btn");

anagramBtn.addEventListener("click", () => {
  const stringOne = document.getElementById("string-one").value;
  const stringTwo = document.getElementById("string-two").value;
  const anagramResult = document.getElementById("anagram-result");
  if (isAnagram(stringOne, stringTwo)) {
    anagramResult.textContent = `${stringOne} and ${stringTwo} are Anagrams!`;
  } else {
    anagramResult.textContent = `${stringOne} & ${stringTwo} are not Anagrams!`;
  }
});

const isAnagram = (str1, str2) => {
  const normalised = (str) => {
    str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return normalised(str1) === normalised(str2);
};

const listItemsCollection = document.getElementById("list").children;

const originalItemsArr = [...listItemsCollection].map(
  (item) => item.textContent
);
console.log(originalItemsArr);

document.getElementById("search-list").addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredList = originalItemsArr.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );

  document.getElementById("list").innerHTML = filteredList
    .map((item) => `<li>${item}</li>`)
    .join("");
});
