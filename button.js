console.log("file is working!");

let button = document.getElementById("button");

// Track the current state of the page color (using a flag)
let isClicked = false;

button.addEventListener("click", function(event) {
    console.log("button clicked");

    if (isClicked) {
        // If clicked before, revert to original colors
        document.body.style.backgroundColor = "#2D213C"; // Original background color
        document.body.style.color = "#EAE9E6"; // Original text color
        let links = document.querySelectorAll('a');
        links.forEach(link => {
            link.classList.remove("new-color"); // Remove class to revert link color
        });
        button.style.backgroundColor = "#2D213C"; // Change button background
        button.style.color = "#EAE9E6"; // Change button text color\

    } else {
        // If not clicked before, apply new colors
        document.body.style.backgroundColor = "#EAE9E6"; // Change background color
        document.body.style.color = "#2D213C"; // Change text color
        let links = document.querySelectorAll('a');
        links.forEach(link => {
            link.classList.add("new-color"); // Add class to change link color
        });
        button.style.backgroundColor = "#EAE9E6"; // Change button background
        button.style.color = "#2D213C"; // Change button text color
    }

    // Toggle the state
    isClicked = !isClicked;
});

button.addEventListener("mouseenter", function() {
    if (isClicked) {
        // If clicked before, set hover state to inverted colors
        button.style.color = "red"; // Hover state text color (inverted)
    } else {
        // If not clicked before, set hover state to normal colors
        button.style.color = "red"; // Hover state text color (normal)
    }
});

// Revert to the original button colors when the mouse leaves
button.addEventListener("mouseleave", function() {
    if (isClicked) {
        // When mouse leaves, keep the inverted color scheme for the button
        button.style.color = "#2D213C"; // Normal button text color (inverted)
    } else {
        // When mouse leaves, revert to the normal button color scheme
        button.style.color = "#EAE9E6"; // Normal button text color
    }
});





