document.addEventListener("DOMContentLoaded", function () {
  const itemData = JSON.parse(localStorage.getItem("auctionItemData"));
  console.log("Loaded from localStorage:", itemData); // Debugging line

  if (itemData && itemData.newData) {
    document.querySelector(".wrap_flex").classList.add("hidden");
    const newContentElems = document.querySelectorAll(".new-content");
    newContentElems.forEach((elem) => elem.classList.remove("hidden"));

    document.querySelector(".first_part.new-content .auction_img img").src =
      itemData.itemPicture;
    document.querySelector(".first_part.new-content p").textContent =
      itemData.itemAbout;
    document.querySelector(".second_part.new-content .content h1").textContent =
      itemData.itemName;
    document.querySelector(
      ".second_part.new-content .content p:nth-of-type(1)"
    ).textContent = itemData.itemCategory;
    document.querySelector(
      ".second_part.new-content .content div:nth-of-type(1) p"
    ).textContent = itemData.itemDescription;
    document.querySelector(
      ".second_part.new-content .content h3"
    ).textContent = `Estimated value: $${itemData.estimatedBid}`;
    document.querySelector(
      ".second_part.new-content .flex_cont div:nth-of-type(2) h2"
    ).textContent = `$${itemData.startingBid}`;

    localStorage.removeItem("auctionItemData");
  } else {
    document.querySelector(".wrap_flex").classList.remove("hidden");
    const newContentElems = document.querySelectorAll(".new-content");
    newContentElems.forEach((elem) => elem.classList.add("hidden"));
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Function to check if user is logged in
//   function isLoggedIn() {
//     return localStorage.getItem("isLoggedIn") === "true";
//   }

//   // Function to get the logged-in user's name
//   function getUserName() {
//     return localStorage.getItem("userName") || "Guest";
//   }

//   // Function to handle the bid process
//   function logoo() {
//     const bidValue = document.getElementById("bid_value").value;
//     const bidParagraphs = document.querySelectorAll(
//       ".second_part .content p:nth-of-type(5)"
//     );

//     if (!isLoggedIn()) {
//       // Redirect to the login page if the user is not logged in
//       window.location.href = "login.html"; // Replace with the actual path to your login page
//     } else {
//       // If logged in, update the bid information
//       const userName = getUserName();
//       bidParagraphs.forEach((p) => {
//         p.textContent = `${userName} bid $${bidValue}`;
//       });
//     }
//   }

//   // Attach logoo function to the button's click event
//   const bidButtons = document.querySelectorAll(".btn");
//   bidButtons.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       event.preventDefault();
//       logoo();
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const bidButton = document.querySelector(".btn.my-1");
  const bidInput = document.getElementById("bid_value");
  const bidHistory = document.getElementById("bid_history");
  const userName = localStorage.getItem("userName"); // Assuming username is stored here

  function addBidToHistory(bid) {
    const currentHistory = bidHistory.innerHTML;
    const newBidEntry = `${userName}: $${bid}`;
    bidHistory.innerHTML = `${currentHistory}<br>${newBidEntry}`;
  }

  function handleBid() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      window.location.href = "login.html"; // Redirect to login page
      return;
    }

    const bidValue = bidInput.value;
    if (bidValue) {
      addBidToHistory(bidValue);
      bidInput.value = ""; // Clear the input field after placing a bid
    } else {
      alert("Please enter a bid value.");
    }
  }

  bidButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    handleBid();
  });
});
