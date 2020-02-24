/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');

function addImage (carousel, url) {
  const image = document.createElement('img');
  image.src = url;
  image.style.display = `inline-block`;
  carousel.appendChild(image);
}

function makeCarousel () {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carousel.style.height = `100px`;
  carouselContainer.appendChild(carousel);

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = ` < `;
  carousel.appendChild(leftButton);

  addImage(carousel, `./assets/carousel/mountains.jpeg`);
  addImage(carousel, `./assets/carousel/computer.jpeg`);
  addImage(carousel, `./assets/carousel/trees.jpeg`);
  addImage(carousel, `./assets/carousel/turntable.jpeg`);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ` > `;
  carousel.appendChild(rightButton);
}

makeCarousel();
const allImages = document.querySelectorAll('.carousel img');
console.log(allImages);
