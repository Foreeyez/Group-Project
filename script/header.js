// Header
document.addEventListener("DOMContentLoaded", function () {
  const accountButton = document.querySelector(".shuu .boo");
  const accDropdown = document.querySelector(".acc-dropdown");
  const loginDropdown = document.querySelector(".login-dropdown");
  const signOutButton = document.getElementById("signoutbtn");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Ensure dropdowns are hidden initially
  accDropdown.style.display = "none";
  loginDropdown.style.display = "none";

  accountButton.addEventListener("click", function () {
    if (isLoggedIn) {
      loginDropdown.style.display =
        loginDropdown.style.display === "block" ? "none" : "block";
    } else {
      accDropdown.style.display =
        accDropdown.style.display === "block" ? "none" : "block";
    }
  });

  signOutButton.addEventListener("click", function () {
    localStorage.setItem("isLoggedIn", "false");
    loginDropdown.style.display = "none";
    accDropdown.style.display = "block";
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
