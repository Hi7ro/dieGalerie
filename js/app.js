let images = ['/assets/img1.jpg', '/assets/img2.jpg', '/assets/img3.jpg', '/assets/img4.jpg', '/assets/img5.jpg'];

let carouselBox = document.getElementById('image-box');

function renderImages() {
  pushNewImages();
}

function pushNewImages() {
  for (let i = 0; i < images.length; i++) {
    carouselBox.innerHTML += `
    <div class="img-box">
      <img src="${images[i]}">
      <h3 id="paint-title">Bild Titel ${i + 1}</h3>
  </div>
  `
  }
}

function openImg() {}