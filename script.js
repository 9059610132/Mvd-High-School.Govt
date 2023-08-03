const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const imageGallery = document.querySelector(".scrollable-images");
let imageIndex = 0;

function scrollLeft() {
  if (imageIndex === 0) {
    imageIndex = imageGallery.childElementCount - 1;
  } else {
    imageIndex--;
  }
  updateImageGallery();
}

function scrollRight() {
  if (imageIndex === imageGallery.childElementCount - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  updateImageGallery();
}

function updateImageGallery() {
  const imageWidth = imageGallery.firstElementChild.clientWidth;
  const offset = imageWidth * imageIndex;
  imageGallery.style.transform = `translateX(-${offset}px)`;
}
