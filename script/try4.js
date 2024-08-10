document.addEventListener("DOMContentLoaded", function () {
    let jsonData = [];
    
    // Fetch data from JSON
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        jsonData = data;
         // Function to display images on index.html
        // displaysec1(data);
        displayImages(data)
        displayImages2(data)
        // jsonData.push[10];
        // console.log(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));
    
    
    
    
      function displayImages(data) {
        const scrollDiv = document.getElementById('scroll3');
        
        // Clear the existing content
        scrollDiv.innerHTML = '';
    
        const limitedData = data.slice(5, 8);
        // Loop through the JSON data and create image elements
        limitedData.forEach((item, index) => {
          const imageDiv = document.createElement('div');
          imageDiv.classList.add('sec3_img');
          
          const r1c1p = document.createElement("p");
          r1c1p.innerHTML = item.seller;
          scrollDiv.appendChild(r1c1p);
          const r1c1s = document.createElement("h5");
          r1c1s.innerHTML = item.origin;
          scrollDiv.appendChild(r1c1s);

          // Assuming the image URL is stored in item.imageUrl
          const imgElement = document.createElement('img');
          imgElement.src = item.best;
          imgElement.alt = `Image ${index + 1}`;
          imgElement.classList.add('sec3_img'); // Optional: Add class for styling
          imgElement.addEventListener('click', () => {
            window.location.href = `auction-single.html?id=${item.id}`;
          });
          imageDiv.appendChild(imgElement);
          scrollDiv.appendChild(imageDiv);
    
          imageDiv.appendChild(r1c1p);
          imageDiv.appendChild(r1c1s);
        });}
    
        
      function displayImages2(data) {
        const scrollDiv = document.getElementById('scroll4');
        
        // Clear the existing content
        scrollDiv.innerHTML = '';
    
        // Loop through the JSON data and create image elements
        data.forEach((item, index) => {
          const imageDiv = document.createElement('div');
          imageDiv.classList.add('scroll3_img');
          
          const r1c1p = document.createElement("p");
          r1c1p.innerHTML = item.seller;
          scrollDiv.appendChild(r1c1p);
          const r1c1s = document.createElement("h5");
          r1c1s.innerHTML = item.origin;
          scrollDiv.appendChild(r1c1s);
    
          // Assuming the image URL is stored in item.imageUrl
          const imgElement = document.createElement('img');
          imgElement.src = item.best;
          imgElement.alt = `Image ${index + 1}`;
          imgElement.classList.add('scroll3_img'); // Optional: Add class for styling
          imgElement.addEventListener('click', () => {
            window.location.href = `auction-single.html?id=${item.id}`;
          });
          imageDiv.appendChild(imgElement);
          scrollDiv.appendChild(imageDiv);
    
          imageDiv.appendChild(r1c1p);
          imageDiv.appendChild(r1c1s);
        });}
    });
    