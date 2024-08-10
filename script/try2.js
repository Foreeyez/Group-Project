document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const item = data.find((img) => img.id == id);

      if (item) {
        document.getElementById("single_img").src = item.images;
        document.getElementById("single_name").textContent = item.name;
        document.getElementById("single_story").textContent = item.story;
        document.getElementById("single_end_time").textContent = item.endTime;
        document.getElementById("start_b").textContent = `Starting bid:  $${item.startingBid}`;
        document.getElementById(
          "current_b"
        ).textContent = `$${item.currentBid}`;
        document.getElementById(
          "single_cat"
        ).textContent = `${item.category.primary} \\ ${item.category.secondary}`;
      }
      console.log(item.images);
    });
});

function logoo() {
  let a = document.getElementById("bid_value").value.trim();
   let b = document.getElementById("current_b").textContent.trim();
   let c = parseInt(b.replace(/[^0-9]/g, ''), 10);
   let d = parseInt(a, 10);
  if (c < d || c == d){
    return document.getElementById("current_b").textContent = `$${d}`;
  } else {
    window.alert("Tasketekure");
  }
}
