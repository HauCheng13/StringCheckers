
const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const input2 = document.getElementById("text-input2");
const button2 = document.getElementById("check-btn2");
const result2 = document.getElementById("result2");

const checker = () => {
  if(input.value === "") {
    alert("Please input a value");
    result.style.display = "none"; //Make result empty if no value
  }
  else {
    result.style.display ="block";
  }
  if(input.value.length === 1) {
    result.innerText = `${input.value} is a palindrome`;
  }
  const cleanedInput = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedInput = cleanedInput.split("").reverse().join("");
  if (reversedInput === cleanedInput) {
    result.innerText = `${input.value} is a palindrome`;
  }
  else {
    result.innerText = `${input.value} is not a palindrome`;
  }
}

const checker2 = () => {
  if(input2.value === "") {
    alert("Please input a value")
    result2.style.display = "none";
  }
  else {
    result2.style.display = "block";
  }
  const cleanedText = input2.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase(); //remove punctuation and convert to lowercase
  const seperatedWords = cleanedText.split(/\s+/); // split text into words
  
  const frequency = {}; //Create a frequency object

  // Count each word
seperatedWords.forEach(word => {
  if(word) {
    frequency[word] = (frequency[word] || 0) + 1 // Count word frequency 
  }
});

//Clear results and display the new word count frequency

result2.innerHTML = ""; //Clear previous results
for (const [word, count] of Object.entries(frequency)) {
  const wordElement = document.createElement("p"); //Create new element to store words/frequency
  wordElement.textContent = `${word} : ${count}`;
  result2.appendChild(wordElement);
}


}


button.addEventListener("click", checker);
button2.addEventListener("click", checker2);
