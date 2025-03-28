// Function to display the places
function displayPlaces() {
  const placesContainer = document.getElementById("places-container");
  placesContainer.innerHTML = ""; // Clear any existing places

  places.forEach((place) => {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    placeCard.innerHTML = `
            <img src="${place.image}" alt="${place.name}" />
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;

    placesContainer.appendChild(placeCard);
  });
}

// Function to handle search (you can extend this to filter places based on the search term)
function searchPlaces() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(searchInput) ||
      place.description.toLowerCase().includes(searchInput)
  );

  const placesContainer = document.getElementById("places-container");
  placesContainer.innerHTML = ""; // Clear the current places

  if (filteredPlaces.length > 0) {
    filteredPlaces.forEach((place) => {
      const placeCard = document.createElement("div");
      placeCard.classList.add("place-card");

      placeCard.innerHTML = `
                <img src="${place.image}" alt="${place.name}" />
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            `;

      placesContainer.appendChild(placeCard);
    });
  } else {
    placesContainer.innerHTML = "<p>No places found</p>";
  }
}

// Display places on initial load
displayPlaces();
// Firebase configuration (replace with your actual Firebase credentials)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Get DOM elements
const profileContainer = document.getElementById("profile-container");
const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");

// Function to display user profile after login
function displayUserProfile(user) {
  const userInfo = `
        <img src="${user.photoURL}" alt="${user.displayName}" />
        <h3>Welcome, ${user.displayName}</h3>
        <p>Email: ${user.email}</p>
    `;
  profileContainer.innerHTML = userInfo;
  signInBtn.style.display = "none";
  signOutBtn.style.display = "block";
}

// Sign in with Google
signInBtn.addEventListener("click", () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      displayUserProfile(user);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error.message);
    });
});

// Sign out
signOutBtn.addEventListener("click", () => {
  auth
    .signOut()
    .then(() => {
      profileContainer.innerHTML = "<p>You have been logged out.</p>";
      signInBtn.style.display = "block";
      signOutBtn.style.display = "none";
    })
    .catch((error) => {
      console.error("Error during sign-out:", error.message);
    });
});

// Check if the user is already signed in
auth.onAuthStateChanged((user) => {
  if (user) {
    displayUserProfile(user);
  } else {
    profileContainer.innerHTML = "<p>You are not logged in.</p>";
    signInBtn.style.display = "block";
    signOutBtn.style.display = "none";
  }
});
// Sample places (mock data) to display in the cards
const places = [
  {
    name: "Sunny Beach",
    category: "beach",
    description: "A relaxing beach with stunning views.",
    image: "https://via.placeholder.com/200x150.png?text=Beach",
  },
  {
    name: "Mountain Adventure",
    category: "mountain",
    description: "A beautiful mountain range for hiking.",
    image: "https://via.placeholder.com/200x150.png?text=Mountain",
  },
  {
    name: "Green Park",
    category: "park",
    description: "A peaceful park with plenty of green space.",
    image: "https://via.placeholder.com/200x150.png?text=Park",
  },
  {
    name: "Sunset Beach",
    category: "beach",
    description: "Enjoy the sunset at this beautiful beach.",
    image: "https://via.placeholder.com/200x150.png?text=Beach",
  },
  {
    name: "Mountain Peak",
    category: "mountain",
    description: "Climb to the peak and enjoy breathtaking views.",
    image: "https://via.placeholder.com/200x150.png?text=Mountain",
  },
];

// Function to display the places dynamically
function displayPlaces(filteredPlaces) {
  const placesContainer = document.getElementById("places-container");
  placesContainer.innerHTML = ""; // Clear any existing places

  filteredPlaces.forEach((place) => {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    placeCard.innerHTML = `
            <img src="${place.image}" alt="${place.name}" />
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;

    placesContainer.appendChild(placeCard);
  });
}

// Function to handle search
function searchPlaces() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(searchInput) ||
      place.description.toLowerCase().includes(searchInput)
  );

  displayPlaces(filteredPlaces);
}

// Function to filter places by category
function filterByCategory() {
  const selectedCategory = document.getElementById("category").value;

  if (selectedCategory === "") {
    displayPlaces(places); // Show all places if no category is selected
  } else {
    const filteredPlaces = places.filter(
      (place) => place.category === selectedCategory
    );
    displayPlaces(filteredPlaces);
  }
}

// Display all places on initial load
displayPlaces(places);
console.log("Travel Buddy JS Loaded");

let map;

function initMap() {
  // Create a map centered on a default location (e.g., New York City)
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.006 }, // Default to NYC
    zoom: 12,
  });

  // Add event listener to search button
  document
    .querySelector("button")
    .addEventListener("click", searchDestinations);
}

// Function to display places dynamically
function displayPlaces(filteredPlaces) {
  const placesContainer = document.getElementById("places-container");
  placesContainer.innerHTML = ""; // Clear any existing places

  filteredPlaces.forEach((place) => {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    placeCard.innerHTML = `
          <img src="${place.image}" alt="${place.name}" />
          <h3>${place.name}</h3>
          <p>${place.description}</p>
      `;

    placesContainer.appendChild(placeCard);
  });
}
