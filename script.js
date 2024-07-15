// Function to open login modal
function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

// Function to close login modal
function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Function to handle login
function loginUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    document.getElementById("loginResult").innerHTML = `Welcome, ${username} (${email})! You are logged in.`;
    setTimeout(() => {
      closeLoginModal(); // Close modal after successful login (you can redirect or perform other actions here)
    }, 1000);
  } else {
    document.getElementById("loginResult").innerHTML = "Passwords do not match. Please try again.";
  }

  // Prevent form submission
  return false;
}

// Function to handle Book Now button
function handleBookNow() {
  // Replace with your custom action for the Book Now button
  alert("Performing custom action for Book Now...");
}

// Function to show tourism points based on button click
function showTourismPoints(destination) {
  let tourismPoints = "";

  switch (destination) {
    case 'destination1':
      tourismPoints = "Uncover off-the-beaten-path destinations that offer unique cultural experiences and natural beauty.";
      break;
    case 'destination2':
      tourismPoints = "Dive deep into local cultures, traditions, and cuisines to truly understand and appreciate each destination.";
      break;
    case 'destination3':
      tourismPoints = "Explore breathtaking landscapes, from serene beaches to majestic mountains and bustling cityscapes.";
      break;
    default:
      tourismPoints = "No tourism points available.";
  }

  alert(tourismPoints);
}
