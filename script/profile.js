// profile
document.addEventListener("DOMContentLoaded", function () {
  const accountButton = document.querySelector(".shuu .boo");
  const accDropdown = document.querySelector(".acc-dropdown");
  const loginDropdown = document.querySelector(".login-dropdown");
  const signOutButton = document.getElementById("signoutbtn");

  accountButton.addEventListener("click", function () {
    loginDropdown.style.display =
      loginDropdown.style.display === "block" ? "none" : "block";
  });

  signOutButton.addEventListener("click", function () {
    loginDropdown.style.display = "block";
    accDropdown.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (
      !accountButton.contains(event.target) &&
      !accDropdown.contains(event.target) &&
      !loginDropdown.contains(event.target)
    ) {
      accDropdown.style.display = "none";
      loginDropdown.style.display = "none";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const editProfileButton = document.getElementById("edit-profile-btn");
//   const modal = document.getElementById("edit-profile-modal");
//   const closeButton = document.querySelector(".close-btn");

//   editProfileButton.addEventListener("click", function () {
//     modal.style.display = "block";
//   });

//   closeButton.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });

//   const form = document.getElementById("edit-profile-form");
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // Add functionality to handle form submission and update profile
//     alert("Profile updated successfully!");
//     modal.style.display = "none";
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const editProfileButton = document.getElementById("edit-profile-btn");
  const modal = document.getElementById("edit-profile-modal");
  const closeButton = document.querySelector(".close-btn");
  const form = document.getElementById("edit-profile-form");

  editProfileButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const profilePictureInput = document.getElementById("profile-picture");
    const profilePicture = profilePictureInput.files[0];

    // Update the profile page with the new values
    document.querySelector(".profile-info h2").textContent = name;
    document.querySelector(".profile-info p").textContent = "Email: " + email;

    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector(".profile-info .profile-picture").src =
          e.target.result;
      };
      reader.readAsDataURL(profilePicture);
    }

    // Close the modal
    modal.style.display = "none";

    // Show a success message or handle further actions
    alert("Profile updated successfully!");
  });
  const placeItemButton = document.getElementById("place-item-btn");
  placeItemButton.addEventListener("click", function () {
    window.location.href = "addauction.html";
  });
});
