document.addEventListener("DOMContentLoaded", function () {
  let jsonData = [];

  // Fetch data from JSON
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
      displaycontent(data); // Function to display images on index.html
      // displaysec1(data);
      displayImages(data);
      displayImages2(data);
      bid(data);
      // jsonData.push[10];
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));

  function displaycontent(data) {
    const container = document.getElementById("main_img"); // Ensure you have a container with this ID in index.html

    const main_cat = document.getElementById("main_cat");
    main_cat.innerHTML = `${data[1].category.primary} \\ ${data[1].category.secondary}`;
    const main_name = document.getElementById("main_name");
    main_name.innerHTML = data[1].name;
    const main_story = document.getElementById("main_story");
    main_story.innerHTML = data[1].story;

    const img = document.createElement("img");
    img.src = data[1].images;
    img.alt = data[1].name;
    img.dataset.id = data[1].id; // Store the ID in a data attribute
    img.addEventListener("click", () => {
      window.location.href = `auction-single.html?id=${data[1].id}`;
    });
    container.appendChild(img);
  }

  function displayImages(data) {
    const scrollDiv = document.getElementById("scroll");

    // Clear the existing content
    scrollDiv.innerHTML = "";

    const port = data.slice(2, 9);
    // Loop through the JSON data and create image elements
    port.forEach((item, index) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("sec2_img");

      const r1c1p = document.createElement("p");
      r1c1p.innerHTML = item.name;
      scrollDiv.appendChild(r1c1p);
      const r1c1s = document.createElement("h5");
      r1c1s.innerHTML = item.seller;
      scrollDiv.appendChild(r1c1s);
      const r1c1c = document.createElement("h5");
      r1c1c.innerHTML = `$${item.currentBid}`;
      scrollDiv.appendChild(r1c1c);
      // Assuming the image URL is stored in item.imageUrl
      const imgElement = document.createElement("img");
      imgElement.src = item.images;
      imgElement.alt = `Image ${index + 1}`;
      imgElement.classList.add("image-class"); // Optional: Add class for styling
      imgElement.addEventListener("click", () => {
        window.location.href = `auction-single.html?id=${item.id}`;
      });
      imageDiv.appendChild(imgElement);
      scrollDiv.appendChild(imageDiv);

      imageDiv.appendChild(r1c1p);
      imageDiv.appendChild(r1c1s);
      imageDiv.appendChild(r1c1c);
    });
  }

  function displayImages2(data) {
    const scrollDiv = document.getElementById("scroll2");

    // Clear the existing content
    scrollDiv.innerHTML = "";

    // Loop through the JSON data and create image elements
    data.forEach((item, index) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("sec2_img");

      const r1c1p = document.createElement("p");
      r1c1p.innerHTML = item.name;
      scrollDiv.appendChild(r1c1p);
      const r1c1s = document.createElement("h5");
      r1c1s.innerHTML = item.seller;
      scrollDiv.appendChild(r1c1s);
      const r1c1c = document.createElement("h5");
      r1c1c.innerHTML = `$${item.currentBid}`;
      scrollDiv.appendChild(r1c1c);

      
      // Assuming the image URL is stored in item.imageUrl
      const imgElement = document.createElement("img");
      imgElement.src = item.images;
      imgElement.alt = `Image ${index + 1}`;
      imgElement.classList.add("image-class"); // Optional: Add class for styling
      imgElement.addEventListener("click", () => {
        window.location.href = `auction-single.html?id=${item.id}`;
      });
      imageDiv.appendChild(imgElement);
      scrollDiv.appendChild(imageDiv);

      imageDiv.appendChild(r1c1p);
      imageDiv.appendChild(r1c1s);
      imageDiv.appendChild(r1c1c);
    });
  }
});

function bid(data){

  const bidElement = document.getElementById("bid_n");
  bidElement.addEventListener("click", () => {
    window.location.href = `auction-single.html?id=${data[1].id}`;
  
});}