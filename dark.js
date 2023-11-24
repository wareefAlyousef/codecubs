function updateHomeImage(isDarkMode) {
    var homeImage = document.getElementById("darkhome");
    if (isDarkMode) {
        homeImage.src = 'images/dark-home.png';
    } else {
        homeImage.src = 'images/home.png';
    }
}

function updatemoon(isDarkMode) {
    var moonimg = document.getElementById("moon");
    if (isDarkMode) {
        moonimg.src = 'images/sun.png';
    } else {
        moonimg.src = 'images/moon.png';
    }
}

function toggleDarkMode() {
    const body = document.body;

    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');

    // Save the dark mode state to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Update the home image based on dark mode state
    updateHomeImage(isDarkMode);
    updatemoon(isDarkMode);
}

// Check if dark mode is enabled from localStorage and apply it on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "true") {
        document.body.classList.add("dark-mode");
        updateHomeImage(true);
        updatemoon(true);
    } else {
        updateHomeImage(false);
        updatemoon(false);
    }
});

// Attach the toggleDarkMode function to the button click event
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);