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
      ".second_part.new-content .content p:nth-of-type(2)"
    ).textContent = itemData.itemDescription;
    document.querySelector(
      ".second_part.new-content .content h3"
    ).textContent = `Estimated value: £${itemData.estimatedBid}`;
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
