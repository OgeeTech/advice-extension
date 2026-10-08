// Wait for the popup DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const adviceText = document.getElementById("advice-text");
  const generateBtn = document.getElementById("generate-btn");

  // Function to fetch data from the API
  async function fetchAdvice() {
    adviceText.innerText = "Loading...";
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      adviceText.innerText = `"${data.slip.advice}"`;
    } catch (error) {
      adviceText.innerText = "Error fetching advice.";
    }
  }

  // Attach the click listener
  generateBtn.addEventListener("click", fetchAdvice);

  // Fetch a piece of advice immediately when the popup opens
  fetchAdvice();
});
