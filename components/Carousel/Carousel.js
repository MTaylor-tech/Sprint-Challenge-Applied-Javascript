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

function addImage (container, url, isVisible) {
  const image = document.createElement('img');
  image.src = url;
  if (isVisible) { image.style.display = `inline-block`; }
  container.appendChild(image);
}

function makeCarousel () {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carousel.style.height = `100px`;
  carouselContainer.appendChild(carousel);

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = ` < `;
  leftButton.addEventListener('click',()=>leftButtonPressed(carousel));
  carousel.appendChild(leftButton);

  addImage(carousel, `./assets/carousel/trees.jpeg`, false);
  addImage(carousel, `./assets/carousel/turntable.jpeg`, false);
  addImage(carousel, `./assets/carousel/mountains.jpeg`, true);
  addImage(carousel, `./assets/carousel/computer.jpeg`, true);
  addImage(carousel, `./assets/carousel/trees.jpeg`, true);
  addImage(carousel, `./assets/carousel/turntable.jpeg`,true);
  addImage(carousel, `./assets/carousel/mountains.jpeg`, false);
  addImage(carousel, `./assets/carousel/computer.jpeg`, false);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ` > `;
  rightButton.addEventListener('click',()=>rightButtonPressed(carousel));
  carousel.appendChild(rightButton);
}

function leftButtonPressed (imageContainer) {
  let images = imageContainer.childNodes;
  imageContainer.insertBefore(images[images.length-2],images[1]);
  images[1].style.display = `none`;
  images[2].style.display = `none`;
  for (let i=3; i<images.length-3; i++) {
    images[i].style.display = `inline-block`;
  }
  images[images.length-3].style.display = `none`;
  images[images.length-2].style.display = `none`;
}

function rightButtonPressed (imageContainer) {
  let images = imageContainer.childNodes;
  imageContainer.insertBefore(images[1],images[images.length-1]);
  images[1].style.display = `none`;
  images[2].style.display = `none`;
  for (let i=3; i<images.length-3; i++) {
    images[i].style.display = `inline-block`;
  }
  images[images.length-3].style.display = `none`;
  images[images.length-2].style.display = `none`;
}

makeCarousel();
