// JavaScript for both Sign-up and Ratings pages

// SIGN-UP FORM HANDLING
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Signing up with:", { name, email, password });

    // Optionally, send the data to a server or process further.
    alert("Sign-up successful! Welcome, " + name);
    signupForm.reset();
  });
}

// RATINGS FORM HANDLING
document.addEventListener("DOMContentLoaded", function () {
  // Star Rating System for Ratings Page
  const stars = document.querySelectorAll(".star");
  let selectedRating = 0;

  // Highlight stars based on user selection
  stars.forEach((star) => {
    star.addEventListener("click", function () {
      selectedRating = parseInt(star.getAttribute("data-value"));
      updateStarSelection();
    });

    star.addEventListener("mouseover", function () {
      highlightStars(parseInt(star.getAttribute("data-value")));
    });

    star.addEventListener("mouseout", function () {
      updateStarSelection();
    });
  });

  // Function to highlight stars on hover
  function highlightStars(rating) {
    stars.forEach((star) => {
      if (parseInt(star.getAttribute("data-value")) <= rating) {
        star.style.color = "#d4af37";
      } else {
        star.style.color = "#ccc";
      }
    });
  }

  // Function to update the star color based on the selected rating
  function updateStarSelection() {
    stars.forEach((star) => {
      if (parseInt(star.getAttribute("data-value")) <= selectedRating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  }

  // Handle form submission for Ratings page
  const ratingsForm = document.getElementById("ratings-form");
  if (ratingsForm) {
    ratingsForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (selectedRating === 0) {
        alert("Please select a rating!");
        return;
      }

      const comments = document.getElementById("comments").value;
      console.log(`Rating: ${selectedRating}`);
      console.log(`Comments: ${comments}`);

      // Optionally, send the data to a server or process further.
      alert("Thank you for your feedback!");
      ratingsForm.reset();
      updateStarSelection();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all activity buttons
  const activityButtons = document.querySelectorAll(".activity-button");
  const selectedActivityElement = document.getElementById("selected-activity");

  // Add event listeners to activity buttons
  activityButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const activityName = button.querySelector("h3").textContent;
      selectedActivityElement.textContent = activityName;
    });
  });
});
// Handle form submission
document
  .getElementById("profile-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bio = document.getElementById("bio").value;
    const profilePicture = document.getElementById("profile-picture").files[0];

    // Simulate saving the data (e.g., send it to a server)
    console.log("Profile Saved:");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Bio: ", bio);

    if (profilePicture) {
      console.log("Profile Picture: ", profilePicture.name);
    }

    // Optionally, you could provide user feedback like alert or display a message
    alert("Profile saved successfully!");
  });
