const themeToggleBtn = document.getElementById('theme-toggle');
const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('lotto-numbers-container');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Optional: Save theme preference to local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

generateBtn.addEventListener('click', generateLottoNumbers);

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  
  displayNumbers(sortedNumbers);
}

function displayNumbers(numbers) {
  numbersContainer.innerHTML = '';
  for (const number of numbers) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('lotto-number');
    numberDiv.textContent = number;
    numbersContainer.appendChild(numberDiv);
  }
}

// Optional: Check for saved theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Generate numbers on initial load
generateLottoNumbers();
