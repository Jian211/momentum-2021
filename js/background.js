const images = ["01.jpg","02.jpg","02.jpg"];

const chosenimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`;

document.body.appendChild(bgImage);