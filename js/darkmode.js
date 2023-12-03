function toggleDarkMode() {
  const body = document.body;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  body.classList.toggle("dark");

  // Toggle visibility of sun and moon icons
  if (body.classList.contains("dark")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// Check the initial mode and update the icon
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function handleDarkModeChange(e) {
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (e.matches) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

//darkModeMediaQuery.addListener(handleDarkModeChange);
//handleDarkModeChange(darkModeMediaQuery);
