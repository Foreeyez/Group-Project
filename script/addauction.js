document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("auction-item-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const itemName = document.getElementById("item-name").value;
    const itemDescription = document.getElementById("item-description").value;
    const itemPictureInput = document.getElementById("item-picture");
    const startingBid = document.getElementById("starting-bid").value;
    const itemPicture = itemPictureInput.files[0];

    // Simulate saving the item to the server
    alert("Item placed for auction successfully!");

    // Optionally, redirect to a confirmation page or back to the profile page
    window.location.href = "profile.html";
  });
});
