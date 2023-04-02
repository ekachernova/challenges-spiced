const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

// Something needs to change here…
async function checkIfApiIsAvailable() {
  try {
    icon.textContent = "⏳";
    const response = await fetch(apiStatusUrl);

    if (!response.ok) {
      console.log("error");
      icon.textContent = "❌";
    } else {
      console.log("yes");
      icon.textContent = "✅";
    }
  } catch (error) {
    console.log(`Error message: ${response.message}`);
    icon.textContent = "❌";
  }
}

button.addEventListener("click", (event) => {
  checkIfApiIsAvailable();
});
