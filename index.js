// Select the h2 element by its ID
const heroTitle = document.getElementById("hero-title");

// Function to delete and rewrite the h2 text with typing effect
function updateHeroTitle() {
  const originalText = heroTitle.textContent;
  let index = originalText.length;

  function deleteAndType() {
    if (index >= 0) {
      heroTitle.textContent = originalText.slice(0, index);
      index--;
      setTimeout(deleteAndType, 50); // Adjust typing speed (milliseconds)
    } else {
      const newText = originalText;
      let newIndex = 0;

      function typeWriter() {
        if (newIndex < newText.length) {
          heroTitle.textContent += newText.charAt(newIndex);
          newIndex++;
          setTimeout(typeWriter, 50); // Adjust typing speed (milliseconds)
        }
      }

      typeWriter();
    }
  }

  deleteAndType();
}

// Call the function to update the hero title
updateHeroTitle();
