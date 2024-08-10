document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("auction-item-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const itemPictureInput = document.getElementById("item-picture");
    const itemAbout = document.getElementById("item-about").value;
    const itemCategory = document.getElementById("item-category").value;
    const itemName = document.getElementById("item-name").value;
    const itemDescription = document.getElementById("item-description").value;
    const estimatedBid = document.getElementById("estimated-bid").value;
    const startingBid = document.getElementById("starting-bid").value;
    const itemPicture = itemPictureInput.files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      const itemData = {
        itemPicture: e.target.result,
        itemAbout,
        itemCategory,
        itemName,
        itemDescription,
        estimatedBid,
        startingBid,
        newData: true, // Flag to indicate new data has been submitted
      };

      console.log("Saving to localStorage:", itemData); // Debugging line
      localStorage.setItem("auctionItemData", JSON.stringify(itemData));
      window.location.href = "auction-single.html";
    };
    reader.readAsDataURL(itemPicture);
  });
});
