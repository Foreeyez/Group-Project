document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const response = await fetch("data.json");
      if (!response.ok) {
        return console.log("Error: " + response.status);
      }
      const data = await response.json();
      console.log(data[1].images);

      const img2 = document.createElement("img");
      img2.src = data[0].images;
      const r1c1 = document.getElementById("r1c1");
      r1c1.appendChild(img2);
      const r1c1p = document.createElement("p");
      r1c1p.innerHTML = data[0].name;
      r1c1.appendChild(r1c1p);
      const r1c1s = document.createElement("h5");
      r1c1s.innerHTML = data[0].seller;
      r1c1.appendChild(r1c1s);
      const r1c1c = document.createElement("h5");
      r1c1c.innerHTML = data[0].currentBid;
      r1c1.appendChild(r1c1c);

      const img3 = document.createElement("img");
      img3.src = data[2].images;
      const r1c2 = document.getElementById("r1c2");
      r1c2.appendChild(img3);
      const r1c2p = document.createElement("p");
      r1c2p.innerHTML = data[2].name;
      r1c2.appendChild(r1c2p);
      const r1c2s = document.createElement("h5");
      r1c2s.innerHTML = data[2].seller;
      r1c2.appendChild(r1c2s);
      const r1c2c = document.createElement("h5");
      r1c2c.innerHTML = data[2].currentBid;
      r1c2.appendChild(r1c2c);

      const img4 = document.createElement("img");
      img4.src = data[3].images;
      const r1c3 = document.getElementById("r1c3");
      r1c3.appendChild(img4);
      const r1c3p = document.createElement("p");
      r1c3p.innerHTML = data[3].name;
      r1c3.appendChild(r1c3p);
      const r1c3s = document.createElement("h5");
      r1c3s.innerHTML = data[3].seller;
      r1c3.appendChild(r1c3s);
      const r1c3c = document.createElement("h5");
      r1c3c.innerHTML = data[3].currentBid;
      r1c3.appendChild(r1c3c);

      const img5 = document.createElement("img");
      img5.src = data[4].images;
      const r1c4 = document.getElementById("r1c4");
      r1c4.appendChild(img5);
      const r1c4p = document.createElement("p");
      r1c4p.innerHTML = data[4].name;
      r1c4.appendChild(r1c4p);
      const r1c4s = document.createElement("h5");
      r1c4s.innerHTML = data[4].seller;
      r1c4.appendChild(r1c4s);
      const r1c4c = document.createElement("h5");
      r1c4c.innerHTML = data[4].currentBid;
      r1c4.appendChild(r1c4c);

      const img6 = document.createElement("img");
      img6.src = data[5].images;
      const r1c5 = document.getElementById("r1c5");
      r1c5.appendChild(img6);
      const r1c5p = document.createElement("p");
      r1c5p.innerHTML = data[5].name;
      r1c5.appendChild(r1c5p);
      const r1c5s = document.createElement("h5");
      r1c5s.innerHTML = data[5].seller;
      r1c5.appendChild(r1c5s);
      const r1c5c = document.createElement("h5");
      r1c5c.innerHTML = data[5].currentBid;
      r1c5.appendChild(r1c5c);

      const img7 = document.createElement("img");
      img7.src = data[6].images;
      const r1c6 = document.getElementById("r1c6");
      r1c6.appendChild(img7);
      const r1c6p = document.createElement("p");
      r1c6p.innerHTML = data[6].name;
      r1c6.appendChild(r1c6p);
      const r1c6s = document.createElement("h5");
      r1c6s.innerHTML = data[6].seller;
      r1c6.appendChild(r1c6s);
      const r1c6c = document.createElement("h5");
      r1c6c.innerHTML = data[6].currentBid;
      r1c6.appendChild(r1c6c);

      const img8 = document.createElement("img");
      img8.src = data[7].images;
      const r1c7 = document.getElementById("r1c7");
      r1c7.appendChild(img8);
      const r1c7p = document.createElement("p");
      r1c7p.innerHTML = data[7].name;
      r1c7.appendChild(r1c7p);
      const r1c7s = document.createElement("h5");
      r1c7s.innerHTML = data[7].seller;
      r1c7.appendChild(r1c7s);
      const r1c7c = document.createElement("h5");
      r1c7c.innerHTML = data[7].currentBid;
      r1c7.appendChild(r1c7c);

      const img9 = document.createElement("img");
      img9.src = data[8].images;
      const r1c8 = document.getElementById("r1c8");
      r1c8.appendChild(img9);
      const r1c8p = document.createElement("p");
      r1c8p.innerHTML = data[8].name;
      r1c8.appendChild(r1c8p);
      const r1c8s = document.createElement("h5");
      r1c8s.innerHTML = data[8].seller;
      r1c8.appendChild(r1c8s);
      const r1c8c = document.createElement("h5");
      r1c8c.innerHTML = data[8].currentBid;
      r1c8.appendChild(r1c8c);

      const img10 = document.createElement("img");
      img10.src = data[9].images;
      const r1c9 = document.getElementById("r1c9");
      r1c9.appendChild(img10);
      const r1c9p = document.createElement("p");
      r1c9p.innerHTML = data[9].name;
      r1c9.appendChild(r1c9p);
      const r1c9s = document.createElement("h5");
      r1c9s.innerHTML = data[9].seller;
      r1c9.appendChild(r1c9s);
      const r1c9c = document.createElement("h5");
      r1c9c.innerHTML = data[9].currentBid;
      r1c9.appendChild(r1c9c);

      // Store data in sessionStorage
      sessionStorage.setItem("itemData", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
});

function auctsing() {
  // Redirect to new page
  window.location.href = "auction-single.html";
}

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve data from sessionStorage
  const data = JSON.parse(sessionStorage.getItem("itemData"));

  const singimg = document.createElement("img");
  singimg.src = data[1].images;

  const smain = document.getElementById("single_img");
  smain.appendChild(singimg);

  const single_cat = document.getElementById("single_cat");
  single_cat.textContent = `${data[1].category.primary} \\ ${data[1].category.secondary}`;

  const sb = document.getElementById("start_b");
  sb.textContent = `Starting bid: $${data[1].startingBid}`;

  const story = document.getElementById("single_story");
  story.textContent = data[1].story;

  const name = document.getElementById("single_name");
  name.textContent = data[1].name;

  const cb = document.getElementById("current_b");
  cb.textContent = `$${data[1].currentBid}`;

  const singtime = document.getElementById("single_end_time");
  singtime.textContent = `End Time:${data[1].endTime}`;
  // Display other data as needed
  console.log(data[1].startingBid);
});

function logoo() {
  if (document.querySelector(".login-dropdown").style.display == "block") {
    return (document.getElementById("current_b").innerHTML =
      document.getElementById("bid_value").Value);
  } else {
    window.location.href = "login.html";
    console.log("Tasketekure");
  }
}
