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

/* Project section functionality */
/* scripts.js */

document.getElementById("interior-btn").onclick = function () {
  document.getElementById("interior-projects").style.display = "flex";
  document.getElementById("exterior-projects").style.display = "none";
};

document.getElementById("exterior-btn").onclick = function () {
  document.getElementById("exterior-projects").style.display = "flex";
  document.getElementById("interior-projects").style.display = "none";
};

const projects = {
  interior1: ["images/interior1.jpg", "images/interior2.jpg"],
  exterior1: ["images/exterior1.jpg", "images/exterior2.jpg"],
};

let currentProject = "";
let currentPage = 0;

function openProject(projectId) {
  currentProject = projectId;
  currentPage = 0;
  const pages = projects[projectId];
  const projectPages = document.getElementById("project-pages");
  projectPages.innerHTML = `<img src="${pages[0]}" alt="Project Page">`;
  document.getElementById("project-modal").style.display = "block";
}

function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    const pages = projects[currentProject];
    const projectPages = document.getElementById("project-pages");
    projectPages.innerHTML = `<img src="${pages[currentPage]}" alt="Project Page">`;
  }
}

function nextPage() {
  const pages = projects[currentProject];
  if (currentPage < pages.length - 1) {
    currentPage++;
    const projectPages = document.getElementById("project-pages");
    projectPages.innerHTML = `<img src="${pages[currentPage]}" alt="Project Page">`;
  }
}
